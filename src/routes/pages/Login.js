import { Button, Checkbox, Form, Input, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

import { login } from "../../api/login/login";

import { getAccessToken } from "../../api/method/server.js";

const admin = "Evan Ford";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    getAccessToken(admin).then((res) => {
      const token = res.token;

      const { username, password } = values;

      login(username, password)
        .then(({ data }) => {
          console.log("here is data", data);
          if (data.code === 200) {
            // 将用户数据放入本地存储中
            const user = {
              id: data.newData.id,
              nickName: data.newData.nickName,
              //pwd: data.newData.pwd
              token,
              points: data.newData.points,
              involvedProject: data.newData.involvedProject,
              ownedProject: data.newData.ownedProject,
            };
            window.localStorage.setItem("user", JSON.stringify(user));
            navigate(`/home`);
          }
        })
        .catch((e) => {
          console.log(e, "获取getAccessToken失败");
        });
    });

    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div id="log_on" className="block_log_onBlock">
      <div className="container-fluid">
        <div className="titleHolder"></div>

        <div
          className="loginForm"
          style={{ background: "#ECECEC", padding: "3px", textAlign: "center" }}
        >
          <>
            <img
              alt="回主页"
              onClick={() => navigate("/home")}
              src="http://47.95.112.111:666/bujidao_logo.png"
              style={{ width: "200px", height: "100px" }}
            />
          </>

          <Card
            title="登录"
            bordered={false}
            style={{
              width: "100%",
              borderRadius: "6px",
              boxShadow: "0 0 3px 7px #ffffff30",
            }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="账号"
                name="username"
                style={{ marginRight: "30px" }}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="LoginInput" />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                style={{ marginRight: "30px" }}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password className="LoginInput" />
              </Form.Item>

              <Form.Item
                className="loginSubmit"
                wrapperCol={{
                  offset: 9,
                  span: 16,
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#5F76C0",
                    width: "6rem",
                    borderRadius: "6px",
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  登录
                </Button>
                <Checkbox className="record_button">记住我</Checkbox>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Login;
