import { LOGIN } from "./actionTypes";

const userInfoInterface = {
    id: 112,
    accId: 1088,
    accountId: "14839999956613385119",
    loginName: "18217210856",
    phoneNum: "18217210856",
    hasPayPassword: false,
    email: "",
    registeTime: 1474444124000,
    lastLoginTime: 1516629775000,
    lastLoginIp: "8.8.8.8",
    realName: "万亚飞",
    idCardNum: "321283234948884900",
    bankName: "中国建设银行",
    bankCode: "01050000",
    bankCardNum: "43994049494885994",
    headImage: "https://act.sy8.com/oldProduce/produce/user/20170216185259466.jpg",
    idCardAuthenticate: false,
    bankCardAuthenticate: false
};

export default (previousState = {}, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('action',action.userInfo)
            return action.userInfo;
        default:
            return previousState;
    }
};
