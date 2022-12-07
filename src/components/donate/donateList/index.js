import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space, Card } from "antd";
import React from "react";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function DonateList(props) {
  console.log("pppp", props);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 4,
      }}
      dataSource={props.projectData}
      renderItem={(item) => (
        <Card hoverable size="small">
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={<img width={272} alt="logo" src={item.imgList[0]} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
              title={
                <a href={"projectDetails?id=" + item.id}>
                  评论了该项目----{item.title}
                </a>
              }
              description={item.desc}
              onClick={() => {
                console.log("1111");
              }}
            />
            {item.content}
          </List.Item>
        </Card>
      )}
    />
  );
}

export default DonateList;
