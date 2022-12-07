import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, Layout, List } from "antd";

function UserProject(props) {
  const navigate = useNavigate();
  const gotoProjectDetails = (id) => {
    navigate(`/projectDetails?id=${id}`);
  };
  const { projectData, title } = props;

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

export default UserProject;
