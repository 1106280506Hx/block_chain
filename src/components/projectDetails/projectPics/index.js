import { Carousel } from "antd";
import React from "react";

import "./index.css";

function ProjectPics(props) {
  const { imgList } = props; //array
  // console.log("imgList: ", imgList);
  return (
    <div>
      {imgList ? (
        <Carousel autoplay className="projectPicCarousel">
          {imgList.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} style={{ width: "100%", height: "400px" }} />
              </div>
            );
          })}
        </Carousel>
      ) : (
        <h2>暂无数据</h2>
      )}
    </div>
  );
}
export default ProjectPics;
