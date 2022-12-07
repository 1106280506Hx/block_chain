import React from "react";

import { Button, message, Popconfirm } from "antd";
import "./index.css";

const confirm = (e) => {
  console.log(e);
  message.success("确认成功");
};
const cancel = (e) => {
  console.log(e);
  message.error("取消确认");
};

const ConfirmButton = () => {
  return (
    <Popconfirm
      title="你是否收到?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="是"
      cancelText="否"
    >
      <div className="location">
        <Button className="button" shape="round">
          确认
        </Button>
      </div>
    </Popconfirm>
  );
};
export default ConfirmButton;
