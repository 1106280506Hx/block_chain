import fs from "fs";
import path from "path";
import axios from "axios";
import moment from "moment";
import Chance from "chance";
import CONSTANT from "../config.js";

import {
  readFile,
  invokeSpicefactoryServer,
  getAccessToken,
  registerUser,
  //uploadNFTFile,
  mintNFT,
  getNFT,
  giftNFT,
  getLedger,
  ///////
  createAsset,
  queryAllDcotypeAssets,
  updateAsset,
  getAsset,
} from "./server.js";

// const chance = new Chance();

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

const chance = new Chance();

// const adminId = 103;
// const pwd = 'testmark';
// const appkey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzUsIm5hbWUiOiJMaW9u4oCZcyBhcHAiLCJ1cmwiOiJodHRwOi8vZGFtaWJhdC5qZS9rdXphZmlhYm8iLCJvd25lciI6MTAzLCJpc3N1ZVRpbWUiOjE2NjgwNDI4ODA3MjV9.4t1_drcwCIzo_JF-RQGCq0QPUYTE4GUU_-j0xx3aLag';
// const org = 'spicefactory';

const admin = "Evan Ford";
// eslint-disable-next-line no-unused-vars
const adminId = 99;
// eslint-disable-next-line no-unused-vars
const pwd = "testmark";
// eslint-disable-next-line no-unused-vars
const appkey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzUsIm5hbWUiOiJMaW9u4oCZcyBhcHAiLCJ1cmwiOiJodHRwOi8vZGFtaWJhdC5qZS9rdXphZmlhYm8iLCJvd25lciI6MTAzLCJpc3N1ZVRpbWUiOjE2NjgwNDI4ODA3MjV9.4t1_drcwCIzo_JF-RQGCq0QPUYTE4GUU_-j0xx3aLag";
// eslint-disable-next-line no-unused-vars
const org = "spicefactory";

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
/////////////////////////////////////////////////////////////////////////////////
const testCommon = async () => {
  console.log("\x1B[43m", "start testing", "\x1B[0m");

  console.cyan(`try to get ${admin}'s access token`);
  const { token } = await getAccessToken(admin);
  console.log(
    `got ${admin}'s access token succeed!! token is ${JSON.stringify(token)}`
  );

  const seller = chance.name();
  console.cyan(`try to register a new user ${seller}`);
  await registerUser(seller, token);
  console.green(`register ${seller} succeed!!`);

  console.cyan(`try to get ${seller}'s access token`);
  const sellerAccessTokenResp = await getAccessToken(seller);
  const sellerAccessToken = sellerAccessTokenResp.token;
  console.green(`got ${seller}'s access token succeed!!`);

  console.cyan(`try to get ledger information`);
  let ledger = await getLedger(sellerAccessToken);
  console.log(
    `get ledger information ${JSON.stringify(ledger.ledgerInfo)} succeed !!`
  );
};

const testNFT = async () => {
  console.log("\x1B[43m", "start testing", "\x1B[0m");

  console.cyan(`try to get ${admin}'s access token`);
  const { token } = await getAccessToken(admin);
  console.log(
    `got ${admin}'s access token succeed!! token is ${JSON.stringify(token)}`
  );

  const seller = chance.name();
  console.cyan(`try to register a new user ${seller}`);
  await registerUser(seller, token);
  console.green(`register ${seller} succeed!!`);

  console.cyan(`try to get ${seller}'s access token`);
  const sellerAccessTokenResp = await getAccessToken(seller);
  const sellerAccessToken = sellerAccessTokenResp.token;
  console.green(`got ${seller}'s access token succeed!!`);

  console.cyan(`try to get ledger information`);
  let ledger = await getLedger(sellerAccessToken);
  console.log(
    `get ledger information ${JSON.stringify(ledger.ledgerInfo)} succeed !!`
  );
  /////////////////////////////////////////////////////////////////////

  console.cyan(`try to upload NFT file to server`);
  const files = await uploadNFTFile(sellerAccessToken);
  console.green(`NFT file uploaded succeed!!`);

  console.cyan(`try to mint NFT`);
  const nft = await mintNFT(sellerAccessToken, files);
  console.log(`NFT(${JSON.stringify(nft, null, 4)})  mint succeed !!`);

  console.cyan(`try to get mint NFT`);
  let nftOnBlockchain = await getNFT(sellerAccessToken, nft.thing);
  console.log(
    `got NFT (${JSON.stringify(nftOnBlockchain, null, 4)}), current owner (${
      nftOnBlockchain.nft.owner
    }) succeed !!`
  );

  console.cyan(`try to gift NFT to others`);
  const giftLedgerInfo = await giftNFT(
    sellerAccessToken,
    nftOnBlockchain.nft.id,
    adminId
  );

  //   console.log(
  //     `gift NFT succeed !! related blockchain info: ${JSON.stringify(
  //       giftLedgerInfo
  //     )}`
  //   );
  console.green(
    `gift NFT succeed !! related blockchain info: \n ..... \n 此处省略一万字 \n .....`
  );

  console.cyan(`try to get mint NFT`);
  nftOnBlockchain = await getNFT(sellerAccessToken, nft.thing);
  console.log(
    `got NFT (${JSON.stringify(nftOnBlockchain, null, 4)}), current owner (${
      nftOnBlockchain.nft.owner
    }) succeed !!`
  );
};

//testNFT();

const testAssest = async () => {
  console.log("\x1B[43m", "start testing", "\x1B[0m");

  console.cyan(`try to get ${admin}'s access token`);
  const { token } = await getAccessToken(admin);
  console.log(
    `got ${admin}'s access token succeed!! token is ${JSON.stringify(token)}`
  );

  const seller = chance.name();
  console.cyan(`try to register a new user ${seller}`);
  await registerUser(seller, token);
  console.green(`register ${seller} succeed!!`);

  console.cyan(`try to get ${seller}'s access token`);
  const sellerAccessTokenResp = await getAccessToken(seller);
  const sellerAccessToken = sellerAccessTokenResp.token;
  console.green(`got ${seller}'s access token succeed!!`);

  console.cyan(`try to get ledger information`);
  let ledger = await getLedger(sellerAccessToken);
  console.log(
    `get ledger information ${JSON.stringify(ledger.ledgerInfo)} succeed !!`
  );

  /////////////////////////////////////////////////////////////////////////

  var doctype = "charitydemo";
  const id = 1668514914816;

  const asset = {
    id: 1668855698496,
    title: "守护雏鹰计划",
    desc: "书山有路，为大山深处的孩子们带去更广博的世界和更富足的精神财富。菜鸟驿站联合单向空间和Heaven&Hell一起向全社会发起“翻书越岭”活动，向大家征集闲置文学书，号召大家一起捐出一本书，让孩子们见到更大的世界，成为更好的人，通往无限可能的未来。",
    paragraph:
      "少年儿童是祖国的未来、是中华民族的希望。留守儿童、困境儿童问题是社会发展中出现的新矛盾、新问题，守护他们，让他们与其他儿童一样共享改革开放成果、提高生活学习质量，是我们民政人义不容辞的责任。近日，为切实加强农村留守儿童和困境儿童关爱服务，民政部此次联合教育部、公安部、司法部、财政部、人力资源社会保障部、国务院妇儿工委办公室、共青团中央、全国妇联、中国残联等十部门制定出台了《关于进一步健全农村留守儿童和困境儿童关爱服务体系的意见》，旨在为农村留守儿童和困境儿童的健康成长保障护航。随着儿童福利体制改革的深入、保障人群的扩大、工作机制的调整和社会环境的变化等，北京市朝阳区儿童福利院在保障基本人员编制的基础上，探索PPP（委托运行管理）模式运行，降低儿童福利院全生命周期成本、建立风险共担机制、转变政府职能、提升服务效能。前期研究论证，编制实施方案；保障平稳运行，明确权责利关系。\n让我们共同守护留守儿童、困境儿童的明天为他们的未来出一份力！公益只有起点，爱心没有终点，“守护雏鹰计划”持续进行中，我们将继续携手并肩、倾情奉献，让阳光照进留守儿童心里，温暖心灵，点亮前程！",
    imgList: [
      "https://c.pxhere.com/photos/7b/e1/children_school_laughing_fun_happiness_education_elementary_childhood-759682.jpg!s2",
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.mhyMUZaXW-zBVu25mYnsswHaE6?w=281&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.yIbZHqw5i-AwcXEQDQ0WggHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    ],
    aim: 10000,
    present: 0,

    status: 3,
  };

  console.cyan(`try to create a new asset`);
  let ledgerInfo = await createAsset(sellerAccessToken, doctype, asset);

  console.log(`create new asset succeed!! \n ${JSON.stringify(ledgerInfo)}`);
  //   console.green(
  //     `create new asset succeed!! \n ..... \n 此处省略一万字 \n .....`
  //   );

  console.cyan(`query all doctype(${doctype}) assets`);
  const assetsDoctypeOnBlockchain = await queryAllDcotypeAssets(
    sellerAccessToken,
    doctype
  );

  console.log(
    `query all doctype(${doctype}) assets succeed!! \n ${JSON.stringify(
      assetsDoctypeOnBlockchain,
      null,
      4
    )}`
  );

  console.cyan(`try to get asset`);
  const assetFromBlockchain = await getAsset(sellerAccessToken, 60001, doctype);
  console.log(
    `got asset asset cl \n ${JSON.stringify(assetFromBlockchain.asset)}`
  );
};

testAssest();
