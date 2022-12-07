import React from "react";

import { BackTop } from "antd";

import "./index.css";

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <img
            alt="布吉岛"
            src="https://s1.ax1x.com/2022/11/15/zEw58J.png"
            style={{ width: "150px", height: "75px" }}
          />
        </div>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright"></div>Powered by 2022 Spicefactory Inc.
        <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
