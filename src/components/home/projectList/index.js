import React from "react";

import { Card, List, Layout } from "antd";
import { useNavigate } from "react-router-dom";

import "./index.css";

function AppProjectList(props) {
  const { projectData, title } = props;

  const navigate = useNavigate();

  const gotoProjectDetails = (id, status) => {
    const [UNDERPLANNING, INPROGRESS] = [0, 1];
    switch (status) {
      case UNDERPLANNING:
        navigate(`/projectJoin?id=${id}`);
        break;
      case INPROGRESS:
        navigate(`/projectDetails?id=${id}`);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <p style={{ marginLeft: "2px" }}>{title}</p>
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
    </div>
  );
}

export default AppProjectList;
