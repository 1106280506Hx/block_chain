import React from "react";

import { Layout, Typography } from "antd";
import "./index.css";

const { Sider, Content } = Layout;
const { Title } = Typography;

function AppIntroduction() {
  const title = "作品介绍";
  const paragraph =
    " 在过去的三十年里，中国的慈善事业随着整体经济的发展而迅速发展。随着科技的进步和数字技术的发展，互联网/移动普及使得具有高度通达性、透明度和使用友好性的新媒体时代到来，数码支付增加了个人接触慈善机构的机会，并随着人民的慈善公益意识和社会责任意识的觉醒，近几年来公益慈善事业展现出了巨大力量。今天，人们发现自己关心。的公益慈善问题时，可以自行在网上参与捐款进入互联网公益慈善3.0阶段之后，我国的慈善事业发生了诸多可喜变化。一是公益慈善组织的发展更加成熟，主要表现在数量增长快、领域覆盖广、慈善领域创新创业多等方面; 二是公益慈善资源得到巨大增长，近三年稳定在千亿元规模上，全民参与捐赠的新模式扩大了网络筹款规模，推动我国公益慈善走出资源短缺时代; 三是慈善组织透明度相对提升，互联网的公开、透明、快速传播的特点，推动了慈善组织的信息披露、慈善项目信息传播、受助人信息反馈";

  return (
    <Layout className="introduction_container" style={{ maxHeight: "520px" }}>
      <Sider className="introduction_sider" width="450px">
        <img
          src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </Sider>
      <Layout className="introduction_desc">
        <Content>
          <Title level={3} textalign="center">
            {title}
          </Title>
          <div>
            <p style={{ textIndent: "2rem" }}>{paragraph}</p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppIntroduction;
