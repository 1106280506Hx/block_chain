/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";

import AppHeader from "./components/common/header/";
import AppFooter from "./components/common/footer/";
//import AppHome from './views/home';

import { NavLink, useLocation, useNavigate, useRoutes } from "react-router-dom";
import route from "./routes";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  const navigate = useNavigate();
  const element = useRoutes(route);
  //自动隐藏header
  // 获取fluid的 ref元素
  // const fluid = useRef()
  // useEffect(() => {
  //   setTimeout(() => {
  //     const header = document.querySelector('.ant-layout-header')
  //     console.log(header);
  //     document.addEventListener('scroll', e => {
  //       console.log(window.scrollY, header.offsetHeight);
  //       // 当前Y大于 50px 吧
  //       if (window.scrollY > 50) {
  //         header.style.transform = 'translateY(-100px)'

  //       } else {
  //         header.style.transform = 'translateY(0)'
  //       }
  //     })
  //   }, 1);
  // })
  const Location = useLocation();
  console.log("Location", Location.pathname);
  console.log(element);
  useEffect(() => {
    if (Location.pathname === "/") {
      navigate("/home");
    }
  }, []);

  return (
    <Layout className="mainLayout">
      {Location.pathname === "/login" ? null : (
        <Header className="layout_myHeader">
          <AppHeader />
        </Header>
      )}
      {/* 放一个组件占位不然header会挡住下面内容 */}
      {Location.pathname === "/login" ? null : (
        <div style={{ height: "100px" }} />
      )}

      {/* 上面有导航，下面就是Home/About的组件来切换 */}
      <div className="appPages">{element}</div>
      {Location.pathname === "/login" ? null : (
        <Footer>
          <AppFooter />
        </Footer>
      )}
    </Layout>
  );
}

export default App;
