import React from "react";
import "./index.css";

function Paragraph(props) {
  // console.log(props)
  const { title, paragraph } = props;
  return (
    <div>
      <div className="project_title">
        <h2>{title}</h2>
      </div>
      <div className="project_paragraph">
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Paragraph;

/* 
    export default 默认暴露
      - export default 变量名
      - 引入时： import 这里的变量名无所谓 from './xxx.js'
      - 这里因为时默认暴露，因此只暴露了一个，所以导入时名字无所谓
      - 一个js模块只能默认暴露一次

    export 变量名 分别暴露
      - export 变量名
      - 引入时： import {变量名} from './xxx.js'
      - 这里的变量名必须和暴露的名一样
      - 一个js模块可以默认暴露多次

      - 包括： export {变量一, 变量二}
        - 引入时： import {变量一, 变量二} from './xxx.js'
*/
