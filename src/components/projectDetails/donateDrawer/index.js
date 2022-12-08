import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, Drawer, Radio, Form, Input, message, Popconfirm, notification } from "antd";
import crypto from "crypto";
import "./index.css";

import { getAccessToken, createAsset } from "../../../api/method/server.js";

const admin = "Evan Ford";

const doctype = "charityD";

function _md5(content) {
  if (!content) {
    //接口怎么没返回previousBlockHash？？？
    return null;
  }
  const md5 = crypto.createHash("md5");
  return md5.update(content).digest("hex");
}
const UploadDonate = async (values, callback) => {
  const id = new Date().getTime();

  const { project, user, amont } = values;
  const hash = _md5(JSON.stringify(values));

  const asset = {
    id,
    project,
    user,
    time: new Date().getTime(),
    hash,
    amont,
  };
  console.log(asset);

  const { token } = await getAccessToken(admin);

  console.cyan(`try to create a new asset`);
  let ledgerInfo = await createAsset(token, doctype, asset);
  console.log(`create new asset succeed!! \n ${JSON.stringify(ledgerInfo, null, 4)}`);
  callback(ledgerInfo.ledgerInfo);
};

const openNotification = (ledgerInfo) => {
  const { txid, hash } = ledgerInfo;
  const { height, currentBlockHash /*,previousBlockHash*/ } = hash;
  const currentBlockHash_md5 = _md5(currentBlockHash);
  // const previousBlockHash_md5 = _md5(previousBlockHash);
  notification.open({
    当前区块高度: height,
    description: "区块高度:\n" + height + "\n txid:\n" + txid + "\n 当前区块哈希:\n" + currentBlockHash_md5,
    onClick: () => {
      console.log("Notification Clicked!");
    },
    placement: "bottomLeft",
  });
};

const DonateDrawer = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const donateValues = {};
  donateValues.project = props.id;
  const userData = JSON.parse(window.localStorage.getItem("user"));
  if (!userData) {
    return <Navigate to="/login"></Navigate>;
  } else {
    donateValues.user = userData.id;
  }
  donateValues.amont = 5; //test

  const confirm = (e) => {
    //console.log(e);
    UploadDonate(donateValues, (info) => {
      openNotification(info);
      message.success("捐款成功");
    });
  };

  const cancel = (e) => {
    // console.log(infoModal);
    message.error("取消捐款");
  };

  return (
    <>
      <div className="location">
        <Button className="button" shape="round" onClick={showDrawer}>
          我要捐助
        </Button>

        <p>增人玫瑰，手留余香</p>
      </div>
      <div className="drawer">
        <Drawer title="捐助账单" placement="bottom" height={500} onClose={onClose} visible={open}>
          <div style={{ height: "100%", width: "60%" }}>
            <Form.Item label="捐赠金额">
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">10元</Radio.Button>
                <Radio.Button value="b">20元</Radio.Button>
                <Radio.Button value="c">50元</Radio.Button>
                <Radio.Button value="d">100元</Radio.Button>
                <Radio.Button value="e">其他</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="捐助留言">
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Popconfirm title="是否确认捐助？" onConfirm={confirm} onCancel={cancel} okText="是" cancelText="否">
                <Button className="button" shape="round" onClick={showDrawer}>
                  确认捐赠
                </Button>
              </Popconfirm>
            </Form.Item>
          </div>
        </Drawer>
      </div>

      <div></div>
    </>
  );
};
export default DonateDrawer;
