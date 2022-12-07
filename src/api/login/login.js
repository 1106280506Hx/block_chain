// import axios from 'axios'
// export const login = (id, pwd) => {
//     return axios.get('http://127.0.0.1:1000/login/', {
//         params: {
//             id, pwd
//         }
//     })
// }

export const login = async (id, pwd) => {
  if (id === "30001" && pwd === "123456") {
    return {
      data: {
        code: 200,
        newData: {
          nickName: "小云",
          id: 30001,
          pwd: "123456",
          points: 10,
          involvedProject: [],
          ownedProject: [],
        },
      },
    };
  } else if (id === "30002" && pwd === "123456") {
    return {
      data: {
        code: 200,
        newData: {
          nickName: "张三",
          id: 30002,
          pwd: "123456",
          points: 10,
          involvedProject: [],
          ownedProject: [],
        },
      },
    };
  } else if (id === "30003" && pwd === "123456") {
    return {
      data: {
        code: 200,
        newData: {
          nickName: "小王",
          id: 30003,
          pwd: "123456",
          points: 60,
          involvedProject: [],
          ownedProject: [],
        },
      },
    };
  }
};
