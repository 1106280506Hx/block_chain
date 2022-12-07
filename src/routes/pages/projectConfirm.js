/* eslint-disable no-unused-vars */
import React from "react";

import ProjectPics from "../../components/projectDetails/projectPics/";
import Paragraph from "../../components/projectDetails/paragraph/";
import ProjectProgress from "../../components/projectDetails/projectProgress/";
import ConfirmButton from "../../components/projectDetails/confirmButton/";

const projectInfoDefault = {
  id: 60001,
  title: "隔离不隔爱 温暖一直在",
  desc: "在这个“抗疫”的特殊时期，他们扛起责任和担当，用专业和热心，做好居民的生活“大管家”，他们用繁忙的脚步踏出“抗疫”的决心，用热情的服务温暖着居民，组成疫情防控中一幅幅难忘的画面。",
  paragraph:
    "社区党委依托“一核五化”管理模式，党建与疫情防控工作深度融合，积极解决辖区居民群众“急难愁盼”问题，形成了“人在网中走、事在格中办、大事小事不出格”的社会治理新格局。 “我的孩子患病，急需去医院查验我的血型，但我在居家隔离，这可怎么办呀！”近日，居住在解放门街道卫民社区的一位居民向社区寻求帮助，他个人积极配合防疫要求进行居家隔离，但老家有生病的孩子因病情治疗需要，需要住院，急需查验他的血型，在疫情防控下如何保证家人的就医需求，成为该居民的“烦心事”。卫民社区了解情况后立即上报街道，并向街道提出外出就医申请，解放门街道高度重视居民需求，批准该名居家隔离人员的外出就医请求。经街道和社区疫情防控工作人员的共同协调，为居民安排了转运救护车，社区工作人员陪同居民到西安市第四人民医院就医检查，全程闭环管理，既满足隔离人员的就医需求，也避免造成交叉感染。疫情就是命令，防控就是责任。在下一步工作中，解放门街道卫民社区将继续按照疫情防控相关要求，始终坚持人民至上、生命至上的工作原则，用心用情关怀居家隔离人员，全力守护辖区群众生命健康与安全。弘扬慈善精神，在人民中达成慈善共识，不失为慈善事业发展的光明大道，健全的慈善机构组织，收了善人的无数爱心，撒出去的，是一片阳光。慈善是没有终点的征途，我们需让其明亮，使其平坦，为其付出。正慈善之身，让慈善之风吹遍华夏大地！",
  imgList: [
    "https://images.pexels.com/photos/3951615/pexels-photo-3951615.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3951373/pexels-photo-3951373.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://cdn.pixabay.com/photo/2021/11/04/06/15/woman-6767494__480.jpg",
  ],
  aim: 10000,
  present: 6000,
  progress: 60,
  userNum: "7,463",
};

//需要数据库

function projectConfirm(props) {
  const projectInfo = projectInfoDefault;

  return (
    <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
      <ProjectPics {...projectInfo}></ProjectPics>
      <Paragraph {...projectInfo}></Paragraph>
      <ProjectProgress {...projectInfo}></ProjectProgress>
      <ConfirmButton></ConfirmButton>
    </div>
  );
}
export default projectConfirm;
