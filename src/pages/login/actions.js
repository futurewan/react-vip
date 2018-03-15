import { LOGIN } from './actionTypes';


export const loginAction = (userInfo)=>({
    type:LOGIN,
    userInfo:userInfo
})