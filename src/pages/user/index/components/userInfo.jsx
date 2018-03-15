import React from "react";
import {Link} from 'react-router-dom'
class UserInfoComponent extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     data: [1, 2, 3, 4, 5]
        // };
    }

    render() {
        return (
            <div className="user-info">
                <div className="user-non-login-info J-user-non-login-info">
                    <a href="javascript:;" className="J-register">
                        注册
                    </a>
                    <i className="border-l" />
                    <Link to="/login" className="J-login">
                        登录
                    </Link>
                </div>
            </div>
        );
    }
}

export default UserInfoComponent;
