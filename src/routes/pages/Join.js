/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ProjectPics from "../../components/projectDetails/projectPics/";
import Paragraph from "../../components/projectDetails/paragraph/";
import ProjectProgress from "../../components/projectDetails/projectProgress/";

import JoinDrawer from "../../components/projectDetails/joinDrawer/";

import { tempGetProjectDetails } from "../../api/temp";

const projectInfoDefault = {
  id: 114514,
  title: "为隔离在家吃不上饭的宝宝们送温暖",
  paragraph:
    "说到慈善，浮现在人们脑海的是爱心、是光明、是温暖，可现实却将公益慈善淹没在世俗的洪流，让人想到的是腐败、也是自私、令人胆寒。日渐丰腴的经济却带不动公益慈善捐款的增长，社会的进步却拉不动慈善组织的发展，人口第一的大国的慈善从业人员却是少之又少，本应是民心所向的慈善事业却一再丢失信任，日益完备的法律又疏漏了慈善的定位。慈善，已经跌落其原应有的高度，成了一种口号，成了我们面对的窘境。中国公益、慈善事业已出现危机!正其身，迫在眉睫何以正身?诚信的重塑，工作的透明，为正身之根本。人无信不立，况且是对于偌大的中国慈善事业，失了诚信便等于丢了民心，少了人民的支持，这份事业又如何蒸蒸日上，起到支撑中国社会保障体系建设的顶梁柱作用。资金流向的不明确，加深了民众对于这个所谓“慈善”组织的误解，慈善的功能没有发挥，反而造成风言风语，加剧了发展难度。多一份付出，少一份贪婪，这是慈善机构、慈善人员该做的，是对社会的承诺，也是对贫苦人口的保证。慈善机构严于律己，多方面加强监督，盈利趋向少了，中饱私囊少了，民心也就上去了。多一丝透明，少一丝污浊，这是慈善工作赢取人民信任的关键，慈善是“玻璃缸里的金鱼”，慈善组织多一分透明度，公众才能增一分信任度;多晒一晒慈善信息，慈善组织才能自证清白，也才便于公众监督，减少问题出现。公开的资金流向，透明的审计结构，是给慈善团体、群众的定心丸。以何正身?法律的完备，机构的健全，为正身之保障。我国社会主义法制体系的建设日益完善，可却少了对慈善组织的定位，少了慈善事业运行的规范，也少了机构组成的规定，慈善事业的发展口号响亮，却无相配套的法律框架，有意愿进入者只能驻足观望。少了法律的约束，我们挂在嘴边的慈善，又如何更好的发展我国地大物博，可是慈善机构组织以及从业人员却不及英美等国，慈善捐赠也是不达标，中国自然少了一份自信。捍卫法律的尊严，首先还需完善法律法规，再用实际行动来捍卫，充分确保慈善公益事业发展，让慈善深深植根与社会主义法制当中，对慈善组织科学定位，规范其运行，履行其职责，保卫其尊严，法律可为慈善事业的发展肃清障碍，铺平道路，是正慈善的之身的重中之重。其次，引进慈善组织，调动民间慈善组织积极性，弘扬慈善精神，在人民中达成慈善共识，不失为慈善事业发展的光明大道，健全的慈善机构组织，收了善人的无数爱心，撒出去的，是一片阳光。慈善是没有终点的征途，我们需让其明亮，使其平坦，为其付出。正慈善之身，让慈善之风吹遍华夏大地。",
  imgList: [
    "https://img1.baidu.com/it/u=1141886718,151264056&fm=253&fmt=auto&app=138&f=JPEG?w=900&h=500",
    "https://img1.baidu.com/it/u=4015902805,417153597&fm=253&fmt=auto?w=900&h=500",
    "https://img0.baidu.com/it/u=1789763619,3635976531&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=278",
  ],
  progress: 75.565656,
};

//需要数据库

function Join(props) {
  const navigate = useNavigate();
  // 进入->id->http->json->
  // 如果参数是以：xxx?id=123&title=abc 需要以 useSearchParams获取

  const [search, setSearch] = useSearchParams();
  // search 是Set结构。需要用get方法来取值
  // setSearch 也是函数，可以用来设置 ?xxx=xxx
  const id = search.get("id");

  const [projectInfo, setProjectInfo] = useState(projectInfoDefault);

  useEffect(() => {
    tempGetProjectDetails(id).then((res) => {
      console.log(res);
      setProjectInfo(res.data);
    });
  }, [id]);

  return (
    <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
      <ProjectPics {...projectInfo}></ProjectPics>
      <Paragraph {...projectInfo}></Paragraph>
      <ProjectProgress {...projectInfo}></ProjectProgress>
      <p>dwadawdaw</p>
      <JoinDrawer></JoinDrawer>
    </div>
  );
}
export default Join;
