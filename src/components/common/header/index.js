import React from "react";

import { Row } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

import "./index.css";
//import { useRef } from 'react';

function AppHeader() {
  const menuList = [
    {
      title: "首页",
      target: "/home",
    },
    {
      title: "个人",
      target: "/user",
    },
    {
      title: "申请",
      target: "/launch",
    },
    {
      title: "项目",
      target: "/donate",
    },
    {
      title: "记录",
      target: "/rank",
    },
    {
      title: "激励",
      target: "/shop",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img
            alt="布吉岛"
            onClick={() => navigate("/home")}
            src="https://s1.ax1x.com/2022/11/15/zEw58J.png"
            style={{ width: "150px", height: "75px" }}
          />
          <a
            href="/home"
            style={{
              fontSize: "18px",
              marginLeft: "20px",
              color: "#555",
              height: "100%",
            }}
          >
            驰善于链 · 助力公益
          </a>
        </div>
        <Row className="menuList" style={{ width: "560px" }}>
          {/* 使用map时，需要给根节点绑定一个key作为唯一标识,  建议用服务器返回的id */}
          {menuList.map((item, index) => {
            const { title, target } = item;
            return (
              <div key={index} className="menuItem" style={{ width: "80px" }}>
                <NavLink className="list-group-item" to={target}>
                  {title}
                </NavLink>
              </div>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppHeader;
