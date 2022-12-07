import React from "react";
import { Row, Col, Button, Card, Typography, message, Popconfirm } from "antd";

import ShopIntroction from "../../components/shop/introduction";
import ShopComments from "../../components/shop/comments";
//import "../styles/Login.css"
const { Title } = Typography;
const { Meta } = Card;

const confirm = (e) => {
  console.log(e);
  message.success("兑换成功");
};
const cancel = (e) => {
  console.log(e);
  message.error("兑换失败");
};

function Shop() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <ShopIntroction />

          <Title>捐助激励</Title>
          <body className="center">
            <p>慈善积分：2000</p>
            <hr />
            <p>可兑换的物品：</p>
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="无项目图片"
                      src="https://img1.baidu.com/it/u=791414682,4191490552&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=200"
                      style={{ width: "100%", height: "16rem" }}
                    />
                  }
                >
                  <Meta title="荣誉证书" />
                  <Meta title="需要积分：500" />

                  <Popconfirm
                    title="确定要兑换该奖品吗？"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="是"
                    cancelText="否"
                  >
                    <Button style={{ margin: "15px" }}>兑换</Button>
                  </Popconfirm>
                </Card>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="无项目图片"
                      src="https://img1.baidu.com/it/u=787847851,1777374768&fm=253&fmt=auto&app=138&f=PNG?w=565&h=500"
                      style={{ width: "100%", height: "16rem" }}
                    />
                  }
                >
                  <Meta title="数字头像" />
                  <Meta title="需要积分：1000" />
                  <Popconfirm
                    title="确定要兑换该奖品吗？"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="是"
                    cancelText="否"
                  >
                    <Button style={{ margin: "15px" }}>兑换</Button>
                  </Popconfirm>
                </Card>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="无项目图片"
                      src="https://img0.baidu.com/it/u=533747539,775613344&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375"
                      style={{ width: "100%", height: "16rem" }}
                    />
                  }
                >
                  <Meta title="荣誉徽章" />
                  <Meta title="需要积分：1500" />
                  <Popconfirm
                    title="确定要兑换该奖品吗？"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="是"
                    cancelText="否"
                  >
                    <Button style={{ margin: "15px" }}>兑换</Button>
                  </Popconfirm>
                </Card>
              </Col>
            </Row>
            <hr />
          </body>
          <ShopComments />
          <h1 text>你的善意，我们都能看见！</h1>
        </div>
      </div>
    </div>
  );
}
export default Shop;
