import React from "react";
import {Link} from 'react-router-dom'
class UserInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data: [1, 2, 3, 4, 5]
        // };
    }

    render() {
        const { userInfo } = this.props;
        console.log(userInfo)
        let info = null;
        if(!Object.keys(userInfo).length){
            info=(<div>
                <a href="javascript:;" className="J-register">
                    注册
                </a>
                <i className="border-l" />
                <Link to="/login" className="J-login">
                    登录
                </Link>
            </div>)
        } else{
            info=(<span>你好，{userInfo.realName}</span>)
        }
         console.log(info)
        return (
            <div className="user-info">
                <div className="user-non-login-info J-user-non-login-info">
                    {info}
                </div>
            </div>
        );
    }
}

export default UserInfoComponent;
