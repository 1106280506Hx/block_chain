import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Drawer, Form, Input, message, Popconfirm } from "antd";

import {
  getAccessToken,
  createAsset,
  //updateAsset,
} from "../../../api/method/server.js";

import "./index.css";

const admin = "Evan Ford";

const doctype = "charitydemo";

const UploadJoin = async (project, callback) => {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  if (project.id && userData) {
    const asset = project;
    console.log("asset", asset);
    asset.status = 1;

    const { token } = await getAccessToken(admin);
    console.log("token:::::", token);
    console.log(`try to create a new asset`);
    //const ledgerInfo = updateAsset(token, id, doctype, asset);
    let ledgerInfo = await createAsset(token, doctype, asset);
    console.log(`asset update succeed!! \n ${ledgerInfo}`);

    if (ledgerInfo) {
      userData.involvedProject.push(project.id);
      window.localStorage.setItem("user", JSON.stringify(userData));
      message.success("加入成功");
      callback();

      return;
    }
  } else {
    message.error("加入失败");
  }
};

const JoinDrawer = (props) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const confirm = (e) => {
    //深拷贝
    UploadJoin(JSON.parse(JSON.stringify(props)), () => {
      setOpen(false);
      navigate(`/home`);
    });
  };
  const cancel = (e) => {
    console.log(e);
    message.error("取消加入");
  };

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };

  return (
    <>
      <div className="location">
        <Button className="button" shape="round" onClick={showDrawer}>
          我要成为志愿者
        </Button>
        <p>奉献他人, 提升自己</p>
      </div>
      <div className="drawer">
        <Drawer
          title="申请成为志愿者"
          placement="bottom"
          height={500}
          onClose={onClose}
          visible={open}
        >
          <div style={{ height: "100%", width: "60%" }}>
            <Form className="form" {...layout}>
              <Form.Item label="姓名" style={{ textAlign: "right" }}>
                <Input.TextArea rows={1} />
              </Form.Item>

              <Form.Item label="联系方式" style={{ textAlign: "right" }}>
                <Input.TextArea rows={1} />
              </Form.Item>

              <Form.Item label="地区" style={{ textAlign: "right" }}>
                <Input.TextArea rows={1} />
              </Form.Item>

              <Form.Item>
                <Popconfirm
                  title="是否确认成为志愿者"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="是"
                  cancelText="否"
                >
                  <Button className="button" shape="round" onClick={showDrawer}>
                    确认提交
                  </Button>
                </Popconfirm>
              </Form.Item>
            </Form>
          </div>
        </Drawer>
      </div>
    </>
  );
};
export default JoinDrawer;
