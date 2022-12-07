/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import UserInfo from "../../components/user/userInfo/";
import UserProject from "../../components/user/userProject/";
import ConfirmProject from "../../components/user/confirmProject/";

import { getAsset, getAccessToken } from "../../api/method/server.js";

// const admin = "Evan Ford";
// // eslint-disable-next-line no-unused-vars
// const adminId = 103;
// // eslint-disable-next-line no-unused-vars
// const pwd = "testmark";
// // eslint-disable-next-line no-unused-vars
// const appkey =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzMsIm5hbWUiOiJBZnJpY2FuIFdpbGQgRG9n4oCZcyBhcHAiLCJ1cmwiOiJodHRwOi8vanVqLmF6L2VkIiwib3duZXIiOjk5LCJpc3N1ZVRpbWUiOjE2Njg0MjkyMzYyMDd9.wo5ru30FLEW9DHbo3f419IMfEbsnoQJhHyZlApgOjVQ";
// // eslint-disable-next-line no-unused-vars
// const org = "spicefactory";
const doctype = "charitydemo";
const admin = "Evan Ford";
// const token = 哎呀我好烦~~~~~
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXIiOiJTcGljZWZhY3RvcnkiLCJpc3N1ZVRpbWUiOjE2Njg0Mjc3NzA1MDQsInByb3Bvc2VyIjoxMDMsInVzZXIiOiJLZWl0aCBQaGVscHMiLCJ1c2VySWQiOjEwMywiYXBwIjozNSwiYXBwb3duZXIiOjEwMywib3JnSWQiOiJzcGljZWZhY3RvcnkifQ.WQnJMfImuvIdYLTub4sQTaiYJHylhaeFLu6vvmetQSM";
let userData = JSON.parse(window.localStorage.getItem("user")) || {};
const token = userData && userData.token ? userData.token : null;
// 全在这函数中报错
const getProjectDetails = async (id) => {
  //const { token } = await getAccessToken(admin);

  console.log("getProjectDetails", id, token);
  if (!token) return;

  console.cyan(`try to get asset`);
  if (!id || !doctype) return;
  const assetFromBlockchain = await getAsset(token, id, doctype);
  console.log("assetFromBlockchain 39行->", assetFromBlockchain);
  console.log(`got asset asset success!!  `);
  return assetFromBlockchain.asset;
};

const getListData = async (projectIdList, callback) => {
  console.log("this list id ", projectIdList);
  let projectBriefList = [];
  let promiseAll = [];
  try {
    // const { token } = await getAccessToken(admin);
    projectIdList.forEach((id) => {
      console.log("执行了getProjectDetails");
      promiseAll.push(
        getProjectDetails(id)
          .then((res) => {
            console.log("50 ->服务器返回了", res);
            if (!res) return;
            const projectBriefInfo = {
              id: res.id,
              title: res.title,
              desc: res.desc,
              status: res.status,
              img: res.imgList[0],
            };
            projectBriefList.push(projectBriefInfo);
          })
          .catch((e) => {
            // 做获取项目失败的逻辑，没失败只是数据空，rnm,所以是后端在搞怪吗
            console.log(e, "getProjectDetails失败");
          })
      );
    });
  } catch (e) {
    console.log("eeeeeeeeeeeeeeeeeeeeeee####", e);
  }

  Promise.all(promiseAll).then((res) => {
    callback(projectBriefList);
  });
};

// console.log("????", JSON.parse(window.localStorage.getItem("user")));
function User() {
  const [ownedList, setOwnedList] = useState();
  const [involvedList, setInvolvedList] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    userData = JSON.parse(window.localStorage.getItem("user")) || {};
    if (!userData.id) {
      //return <Navigate to="/login"></Navigate>;
      navigate("/login");
    }
    const { ownedProject, involvedProject } = userData;
    console.log("listttt:::", ownedProject, involvedProject);

    window.scrollTo(0, 0);
    // setTimeout(() => {
    // getListData(ownedProject, (data) => {
    //   console.log("ownedProjectownedProject", data);
    //   setOwnedList(data);
    // });
    getListData(involvedProject, (data) => {
      console.log("involvedListinvolvedListinvolvedList", data);
      setInvolvedList(data);
    });
    // }, 0);
    // ownedProject &&
    //   ownedProject.forEach((id, index) => {
    //     getProjectDetails(id).then((res) => {
    //       console.log("ownedProject", res);
    //       ownedList.push(res);
    //     });
    //   });
    // involvedProject &&
    //   involvedProject.forEach((id, index) => {
    //     getProjectDetails(id).then((res) => {
    //       console.log("involvedProject", res);
    //       involvedList.push(res);
    //     });
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //wdnmdReact,wrnm

  // if (!userData) {
  //   return <Navigate to="/login"></Navigate>;
  // }

  return (
    <div>
      <UserInfo {...userData}></UserInfo>
      <button
        onClick={() => {
          window.localStorage.removeItem("user");
          navigate("/home");
        }}
      >
        退出登录
      </button>
      {/* <UserProject
        projectData={ownedList}
        title={"我创建的项目: "}
      ></UserProject> */}

      <UserProject
        projectData={involvedList}
        title={"我参与的项目: "}
      ></UserProject>

      <ConfirmProject title={"受援助的项目: "}></ConfirmProject>
    </div>
  );
}

export default User;
