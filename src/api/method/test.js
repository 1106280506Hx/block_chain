import {
    getAccessToken,
    queryAllDcotypeAssets,
  } from "./server.js";



  const admin = "Evan Ford";
const doctype = "charitydemo";


const getListData = async () => {
    const { token } = await getAccessToken(admin);
    console.log(token);

    console.log(`query all doctype(${doctype}) assets`);
    const assetsDoctypeOnBlockchain = await queryAllDcotypeAssets(
      token,
      doctype
    );

    console.log(`query all doctype(${doctype}) assets succeed!!`);
    console.log(JSON.stringify(assetsDoctypeOnBlockchain));
    
  };

getListData()