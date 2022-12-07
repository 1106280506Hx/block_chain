// const fs = require('fs');
// const path = require('path');
// const axios = require('axios');
// const moment = require('moment');
// const Chance = require('chance');
// const chance = new Chance();
// import fs from "fs";
// import path from "path";
import axios from "axios";
import moment from "moment";
import Chance from "chance";
import CONSTANT from "../config.js";

const chance = new Chance();

(() => {
  console.green = (str) => {
    console.log("\x1B[32m", str, "\x1B[0m");
  };
  console.yellow = (str) => {
    console.log("\x1B[33m", str, "\x1B[0m");
  };
  console.blue = (str) => {
    console.log("\x1B[34m", str, "\x1B[0m");
  };
  console.pink = (str) => {
    console.log("\x1B[35m", str, "\x1B[0m");
  };
  console.cyan = (str) => {
    console.log("\x1B[36m", str, "\x1B[0m");
  };
})();

// eslint-disable-next-line no-unused-vars
//const admin = "Evan Ford";
// const admin = "Evan Ford";
// // eslint-disable-next-line no-unused-vars
// //const adminId = 103;
// const adminId =99;
// const pwd = "testmark";
// const appkey =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzMsIm5hbWUiOiJBZnJpY2FuIFdpbGQgRG9n4oCZcyBhcHAiLCJ1cmwiOiJodHRwOi8vanVqLmF6L2VkIiwib3duZXIiOjk5LCJpc3N1ZVRpbWUiOjE2Njg0MjkyMzYyMDd9.wo5ru30FLEW9DHbo3f419IMfEbsnoQJhHyZlApgOjVQ";
// const org = "spicefactory";
const admin = 'Evan Ford';
const adminId = 99;
const pwd = 'testmark';
const appkey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzMsIm5hbWUiOiJDb3BlcG9k4oCZcyBhcHAiLCJ1cmwiOiJodHRwOi8vaGFucGVyd3Uuc28vbG9naXciLCJvd25lciI6OTksImlzc3VlVGltZSI6MTY2ODg0MjE2NTUzOH0.s6dVBtzAKXGjV3clO1KWhvPUoh_n6KHkcbyCiTe5gD0';
const org = 'spicefactory';

/*********poblem     ****** */
const readFile = async () => {
  console.log("读取开始");
  //const targetFile = path.resolve(__dirname, "static", `header001.jpeg`);
  // const targetFile = path.resolve("./src/api/method/static/header001.jpeg");
  // console.yellow(targetFile);
  // const fileExists = fs.existsSync(targetFile);
  // if (fileExists) {
  //   console.log("找到文件");
  // } else {
  //   console.log("文件不见了");
  //   return;
  // }

  //const contents = fs.readFileSync(targetFile);
  //console.yellow(fs.readFileSync(targetFile));
  const array = [
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d,
    0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
    0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xde, 0x00, 0x00, 0x00,
    0x01, 0x73, 0x52, 0x47, 0x42, 0x00, 0xae, 0xce, 0x1c, 0xe9, 0x00, 0x00,
    0x00, 0x04, 0x67, 0x41, 0x4d, 0x41, 0x00, 0x00, 0xb1, 0x8f, 0x0b, 0xfc,
    0x61, 0x05, 0x00, 0x00, 0x00, 0x09, 0x70, 0x48, 0x59, 0x73, 0x00, 0x00,
    0x12, 0x74, 0x00, 0x00, 0x12, 0x74, 0x01, 0xde, 0x66, 0x1f, 0x78, 0x00,
    0x00, 0x00, 0x0c, 0x49, 0x44, 0x41, 0x54, 0x18, 0x57, 0x63, 0xf8, 0x5f,
    0xaf, 0x0e, 0x00, 0x04, 0x26, 0x01, 0xa6, 0x94, 0x30, 0xd2, 0x5f, 0x00,
    0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
  ];

  const contents = new Buffer.from(array);

  //console.log(contents);

  return contents;
};

const invokeSpicefactoryServer = async (options) => {
  try {
    // if (!options.headers) {
    //     options.headers = {};
    // }
    // options.headers['external'] = true;
    const resp = await axios(options);

    return resp;
  } catch (error) {
    console.error(`============  axios invoke error`);
    if (error.response) {
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    }

    // throw error;
  }
};

const getAccessToken = async (userName) => {
  try {
    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${CONSTANT.ACCESS_TOKEN}`;
    const options = {
      method: "POST",
      url,
      data: {
        appkey,
        userName,
        pwd,
      },
    };

    const resp = await invokeSpicefactoryServer(options);
    console.log(`============================`);
    console.log(resp);
    console.log(`============================`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const registerUser = async (name, token) => {
  try {
    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${CONSTANT.REGISTER}`;
    const options = {
      method: "POST",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        password: pwd,
        org,
      },
    };

    const resp = await invokeSpicefactoryServer(options);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};
/*********poblem     ****** */
const uploadNFTFile = async (token) => {
  try {
    const assets = [];
    const asset = await readFile();
    console.yellow(asset);
    assets[0] = {
      fileContent: asset,
      originalname: `${moment.utc().valueOf()}.jpg`,
    };

    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${CONSTANT.UPLOAD_NFT_FILE}`;
    const options = {
      method: "POST",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        assets,
      },
    };

    const resp = await invokeSpicefactoryServer(options);

    const { path, digest } = resp.data;

    return [
      {
        path,
        digest,
        originalname: assets[0].originalname,
      },
    ];
  } catch (error) {
    console.error(error);
  }
};

const mintNFT = async (token, files) => {
  try {
    const data = {
      name: chance.word(),
      description: chance.sentence(),
      equityratio: chance.floating({ min: 0, max: 0.1, fixed: 2 }),
      createtime: `${new Date().getTime()}`,
      files,
      equityable: "true",
    };

    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${CONSTANT.PUBLISH_THING}`;
    const options = {
      method: "POST",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    };

    const resp = await invokeSpicefactoryServer(options);

    return {
      thing: resp.data.thing,
      equityratio: data.equityratio,
      equityable: data.equityable,
      name: data.name,
    };
  } catch (error) {
    console.error(error);
  }
};

const getNFT = async (token, id) => {
  try {
    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${
      CONSTANT.SPICEFACTORY_SERVICE_VERSION
    }${CONSTANT.GET_NFT(id)}`;
    const options = {
      method: "GET",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await invokeSpicefactoryServer(options);

    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const giftNFT = async (token, id, newOwner) => {
  try {
    const data = {
      id,
      newOwner,
    };

    console.log("==================");
    console.log(
      `id(${id}), newOwner(${newOwner}), data(${JSON.stringify(data)})`
    );
    console.log("==================");

    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${CONSTANT.GIFT_NFT}`;
    const options = {
      method: "PUT",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    };

    const resp = await invokeSpicefactoryServer(options);

    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const getLedger = async (token) => {
  try {
    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${CONSTANT.BC_LEDGER}`;
    const options = {
      method: "GET",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await invokeSpicefactoryServer(options);

    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//资产、项目上链
const createAsset = async (token, doctype, asset) => {
  try {
    const data = { doctype, asset };
    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${CONSTANT.ASSET_CREATE}`;
    const options = {
      method: "POST",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    };

    const resp = await invokeSpicefactoryServer(options);

    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

// const queryAllAssets = async (token) => {
//   try {
//     const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${CONSTANT.ASSET_QUERY_ALL_ASSETS}`;
//     const options = {
//       method: "GET",
//       url,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const resp = await invokeSpicefactoryServer(options);

//     return resp.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

//查某个类型的资产
const queryAllDcotypeAssets = async (token, doctype) => {
  try {
    const suffix = CONSTANT.ASSET_QUERY_BY_DOCTYPE(doctype);
    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${suffix}`;
    const options = {
      method: "GET",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await invokeSpicefactoryServer(options);

    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const updateAsset = async (token, id, doctype, asset) => {
  try {
    const suffix = CONSTANT.ASSET_UPDATE(doctype, id);
    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${suffix}`;
    const data = { asset };
    const options = {
      method: "PUT",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    };

    const resp = await invokeSpicefactoryServer(options);

    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

//查某个指定的资产
const getAsset = async (token, id, doctype) => {
  try {
    const suffix = CONSTANT.ASSET_GET(doctype, id);
    //console.log(suffix, "----------------------------suffix");
    // await ()=>{
    //   for (let i = Math.floor(Math.random() * 5e8); i--; ) {}
    // }()

    // var iii = 0;
    // (async () => {
    //   for (let i = 0; i < 1e8; i++) {
    //     iii -= 1;
    //   }
    // })();

    const url = `${CONSTANT.SPICEFACTORY_SERVICE_URL}/${CONSTANT.SPICEFACTORY_SERVICE_VERSION}${suffix}`;
    const options = {
      method: "GET",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await invokeSpicefactoryServer(options);

    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

/*********************************************************************/

export {
  readFile,
  invokeSpicefactoryServer,
  getAccessToken,
  registerUser,
  uploadNFTFile,
  mintNFT,
  getNFT,
  giftNFT,
  getLedger,
  ///////
  createAsset,
  queryAllDcotypeAssets,
  updateAsset,
  getAsset,
};
