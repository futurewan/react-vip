import { LOGIN } from "./actionTypes";

export default (previousState = {}, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('action',action.userInfo)
            return action.userInfo;
        default:
            return previousState;
    }
};
