import React from "react";
import { useEffect, useState } from "react";

import AppIntroduction from "../../components/home/introduction/";
import AppProjectList from "../../components/home/projectList/";

import {
  getAccessToken,
  queryAllDcotypeAssets,
} from "../../api/method/server.js";

const admin = "Evan Ford";
const doctype = "charitydemo";

function AppHome() {
  const [inProgressList, setinProgressList] = useState();
  const [underPlanningList, setunderPlanningList] = useState();

  const getListData = async (callback) => {
    const { token } = await getAccessToken(admin);
    console.log(token);

    console.log(`query all doctype(${doctype}) assets`);
    const assetsDoctypeOnBlockchain = await queryAllDcotypeAssets(
      token,
      doctype
    );

    console.log(`query all doctype(${doctype}) assets succeed!!`);

    callback(assetsDoctypeOnBlockchain);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getListData((data) => {
      const projectBrief_underPlanning = [];
      const projectBrief_inProgress = [];
      console.log("############################", data.allassets);
      data.allassets &&
        data.allassets.forEach((item, index) => {
          const projectBriefInfo = {
            id: item.Record.id,
            title: item.Record.title,
            desc: item.Record.desc,
            status: item.Record.status,
            img: item.Record.imgList[0],
          };

          const [UNDERPLANNING, INPROGRESS] = [0, 1];
          switch (projectBriefInfo.status) {
            case UNDERPLANNING:
              projectBrief_underPlanning.push(projectBriefInfo);
              break;
            case INPROGRESS:
              projectBrief_inProgress.push(projectBriefInfo);
              break;
            default:
              break;
          }
        });

      setinProgressList(projectBrief_inProgress);
      setunderPlanningList(projectBrief_underPlanning);
    });
  }, []);

  return (
    <div className="main">
      <AppIntroduction />
      <AppProjectList projectData={inProgressList} title="进行中的项目" />
      <AppProjectList projectData={underPlanningList} title="筹划中的项目" />
    </div>
  );
}

export default AppHome;
