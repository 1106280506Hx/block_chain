import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getAccessToken, createAsset } from "../../api/method/server.js";

import { Form, Input, Button, message, Cascader, DatePicker, InputNumber, Upload, Typography } from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;

const admin = "Evan Ford";
const doctype = "charitydemo";

let userData = JSON.parse(window.localStorage.getItem("user")) || {};
const userId = userData && userData.id ? userData.id : null;
const token = userData && userData.token ? userData.token : null;

const UploadProject = async (values) => {
  //将UI表单拿到的values处理成标准的项目obj
  const id = new Date().getTime();
  const imgList = [];
  const imgListDefault = [
    {
      thumbUrl: "https://img1.baidu.com/it/u=4234325487,282886408&fm=253&fmt=auto&app=138&f=JPEG?w=236&h=238",
    },
  ];
  (values.upload ?? imgListDefault).forEach((item, index) => {
    imgList.push(item.thumbUrl);
  });
  // eslint-disable-next-line no-unused-vars
  const [UNDERPLANNING, INPROGRESS] = [0, 1];
  const asset = {
    id,
    title: values.projectTitle,
    desc: values.projectBrief,
    aim: values.projectAim,
    present: 0,
    paragraph: values.projectParagraph,
    status: UNDERPLANNING,
    imgList,
    filingNo: "53100000500009167KA21008",
    owner: userId,
  };
  console.log(asset);

  const { token } = await getAccessToken(admin);

  console.log(`try to create a new asset`);
  let ledgerInfo = await createAsset(token, doctype, asset);
  console.log(`create new asset succeed!! \n ${JSON.stringify(ledgerInfo, null, 4)}`);
  message.success("创建成功");
};

/***
	上传验证格式及大小
*/

// eslint-disable-next-line no-unused-vars
function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("只能上传JPG或PNG文件!");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("图片大小需小于2MB!");
    return false;
  }
  return isJpgOrPng && isLt2M;
}

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function Launch() {
  const onFinish = (values) => {
    const { projectTitle, projectBrief, projectParagraph, projectAim } = values;
    if (!(projectTitle && projectBrief && projectParagraph && projectAim)) {
      message.error("表单未完成");
      return;
    }

    UploadProject(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const navigate = useNavigate();
  useEffect(() => {
    userData = JSON.parse(window.localStorage.getItem("user")) || {};
    if (!userData.id) {
      navigate("/login");
    }
    const { ownedProject, involvedProject } = userData;
    console.log("listttt:::", ownedProject, involvedProject);

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //wdnmdReact,wrnm

  return (
    <div id="contact" className="block contactBlock" style={{ marginLeft: "5%", marginRight: "15%" }}>
      <div className="container-fluid">
        <div className="titleHolder"></div>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          layout="horizontal"
          onFinish={onFinish} //提交就顺便上传区块链啊
          onFinishFailed={onFinishFailed}
        >
          <div></div>

          <Title>申请项目</Title>
          <Form.Item label="项目名称" name="projectTitle" required="true">
            <Input />
          </Form.Item>
          <Form.Item label="项目简介" name="projectBrief" required="true">
            <Input />
          </Form.Item>
          <Form.Item label="目标额度" name="projectAim" required="true">
            <Input />
          </Form.Item>
          <Form.Item label="项目地区" name="projectLotation">
            <Cascader
              options={[
                {
                  value: "浙江",
                  label: "浙江",
                  children: [
                    {
                      value: "广州",
                      label: "广州",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="项目日期" name="projectDate">
            <RangePicker />
          </Form.Item>
          <Form.Item label="志愿者人数" name="volunteerNum">
            <InputNumber />
          </Form.Item>
          <Form.Item label="项目详细介绍" name="projectParagraph" required="true">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item name="upload" label="上传图片" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>点击上传</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="确认申请">
            <Button
              htmlType="submit"
              onClick={() => {
                //test();
                //onFinish();
              }}
            >
              提交{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Launch;
