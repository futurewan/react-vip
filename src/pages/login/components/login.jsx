import React from "react";
import { NavBar, Icon} from "antd-mobile";
import LoginFormComponent from "./loginForm";

class LoginComponent extends React.Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    // rightContent={[
                    //     <Icon key="0" type="ellipsis" />
                    // ]}
                >
                    登录
                </NavBar>
                <LoginFormComponent />
            </div>
        );
    }
}

export default LoginComponent;
