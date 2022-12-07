import React from "react";

import { Layout, Typography } from "antd";
import "./index.css";

const { Sider, Content } = Layout;
const { Title } = Typography;

function ShopIntroction() {
  const title = "我们的使命：";
  const paragraph1 =
    "     区块链+慈善使公益之火，善意之光照亮神州大地。一点一滴的捐助，书写了善意。线上公益以轻松便捷的方式，给与了人们“日行一善”的机会，降低了公益的参与的门槛，热心群众的参与度大大提高。“从善如登，从恶如崩。”修养善良之心，要一点一点汇聚爱的力量！";
  const paragraph2 =
    "布吉岛慈善平台创造了一种新的慈善捐赠模式，是真正以社区为基础的。与”局外人“经营的慈善事业不同，这一种新的慈善事业强调社区成员互相协助，是未来慈善事业的发展方向";
  return (
    <Layout className="introduction_container">
      <Sider className="introduction_sider" width="450px">
        <img
          alt="img"
          src="https://images.pexels.com/photos/5340280/pexels-photo-5340280.jpeg?auto=compress&cs=tinysrgb&w=1600"
          style={{ width: "100%", height: "100%" }}
        />
      </Sider>
      <Layout className="introduction_desc">
        <Content>
          <Title textalign="center">{title}</Title>
          <div>
            <p className="introduction_para">{paragraph1}</p>
          </div>
          <div>
            <p className="introduction_para">{paragraph2}</p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default ShopIntroction;
