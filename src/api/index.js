// 这里用于统一引入模块，统一暴露。后续使用里面的发送请求就可以直接引入 该index.js文件
import * as login from "./login/login";
import * as temp from "./temp";

console.log(temp);

export default {
  login,
  temp,
};
