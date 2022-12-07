/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ProjectPics from "../../components/projectDetails/projectPics/";
import Paragraph from "../../components/projectDetails/paragraph/";
import ProjectProgress from "../../components/projectDetails/projectProgress/";
import DonateDrawer from "../../components/projectDetails/donateDrawer/";

import {
  getAccessToken,
  queryAllDcotypeAssets,
  getAsset,
} from "../../api/method/server.js";

const admin = "Evan Ford";
// eslint-disable-next-line no-unused-vars
const adminId = 99;
// eslint-disable-next-line no-unused-vars
const pwd = "testmark";
// eslint-disable-next-line no-unused-vars
const appkey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzMsIm5hbWUiOiJBZnJpY2FuIFdpbGQgRG9n4oCZcyBhcHAiLCJ1cmwiOiJodHRwOi8vanVqLmF6L2VkIiwib3duZXIiOjk5LCJpc3N1ZVRpbWUiOjE2Njg0MjkyMzYyMDd9.wo5ru30FLEW9DHbo3f419IMfEbsnoQJhHyZlApgOjVQ";
// eslint-disable-next-line no-unused-vars
const org = "spicefactory";

const doctype = "charitydemo";

const projectInfoDefault = {
  //这个是参数
  id: 114514,
  title: "标题加载中...",
  paragraph: "正文加载中...",
  imgList: [
    "https://img1.baidu.com/it/u=4234325487,282886408&fm=253&fmt=auto&app=138&f=JPEG?w=236&h=238",
    "https://img1.baidu.com/it/u=4234325487,282886408&fm=253&fmt=auto&app=138&f=JPEG?w=236&h=238",
    "https://img1.baidu.com/it/u=4234325487,282886408&fm=253&fmt=auto&app=138&f=JPEG?w=236&h=238",
  ],
  aim: 0,
  present: 0,
  progress: 0,
};

//需要数据库

function ProjectDetails(props) {
  // 进入->id->http->json->
  // 如果参数是以：xxx?id=123&title=abc 需要以 useSearchParams获取

  const [search, setSearch] = useSearchParams();
  // search 是Set结构。需要用get方法来取值
  // setSearch 也是函数，可以用来设置 ?xxx=xxx
  const id = search.get("id");
  const [projectInfo, setProjectInfo] = useState(projectInfoDefault);

  const getProjectDetails = async (id) => {
    const { token } = await getAccessToken(admin);

    console.cyan(`try to get asset`);
    const assetFromBlockchain = await getAsset(token, id, doctype);
    console.log(`got asset asset success!!  `);
    return assetFromBlockchain.asset;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProjectDetails(id).then((res) => {
      console.log("rojectInfo", res);
      setProjectInfo(res);
    });
  }, [id]); //wdnmdReact

  return (
    <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
      <ProjectPics {...projectInfo}></ProjectPics>
      <Paragraph {...projectInfo}></Paragraph>
      <ProjectProgress {...projectInfo}></ProjectProgress>
      <DonateDrawer {...projectInfo}></DonateDrawer>
    </div>
  );
}
export default ProjectDetails;
