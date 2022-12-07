/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, Layout, List } from "antd";

const projectData = [
  {
    id: 1668502048059,
    title: "隔离不隔爱 温暖一直在",
    desc: "在这个“抗疫”的特殊时期，他们扛起责任和担当，用专业和热心，做好居民的生活“大管家”，他们用繁忙的脚步踏出“抗疫”的决心，用热情的服务温暖着居民，组成疫情防控中一幅幅难忘的画面。",
    img: "https://images.pexels.com/photos/3951615/pexels-photo-3951615.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },

  {
    id: 1668501708387,
    title: "幸福港湾 童心启航",
    desc: "虽然社会文明不断进步，但据联合国调研，每年依然有近10亿儿童遭受各种形式的暴力。2021年的国际不打小孩日，用一支公益短片为少年儿童发声，将幸福与不幸，长大与不想长大，这些矛盾都呈现孩子的童年里，号召人们关注青少年暴力事件。",
    img: "https://images.pexels.com/photos/5889983/pexels-photo-5889983.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

function ConfirmProject(props) {
  const navigate = useNavigate();
  const gotoProjectDetails = (id) => {
    navigate(`/projectConfirm?id=${id}`);
  };
  const { involvedProject, ownedProject, title } = props;

  return (
    <div style={{ margin: "20px" }}>
      <p>{title}</p>
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={projectData}
        renderItem={(item) => (
          <List.Item>
            <Card
              className="projectList_layout"
              hoverable="true"
              // zheyang jiu hao
              onClick={() => gotoProjectDetails(item.id, item.status)}
              style={{ overflow: "hidden" }}
            >
              <Layout style={{ position: "relative" }}>
                <img
                  alt="img"
                  src={item.img}
                  style={{ width: "100%", height: "12rem" }}
                />
                <div className="divStyle_title">
                  <div
                    className="divStyle_titleText"
                    ellipsis="true"
                    style={{ color: "#ffffff" }}
                  >
                    {item.title}
                  </div>
                </div>
                <div className="divStyle_desc">
                  <div
                    className="divStyle_descText"
                    ellipsis="true"
                    style={{ color: "#ffffff" }}
                  >
                    {item.desc}
                  </div>
                </div>
              </Layout>
            </Card>
          </List.Item>
        )}
      />
      <hr />
    </div>
  );
}

export default ConfirmProject;
