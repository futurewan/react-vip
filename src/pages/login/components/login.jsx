import React from "react";
import {connect} from 'react-redux';
import { NavBar, Icon} from "antd-mobile";
import LoginFormComponent from "./loginForm";
import {loginAction} from '../actions'


class LoginComponent extends React.Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onClick={this.props.history.goBack}
                    // rightContent={[
                    //     <Icon key="0" type="ellipsis" />
                    // ]}
                >
                    登录
                </NavBar>
                <LoginFormComponent {...this.props} />
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        uesrInfo:state.userInfo
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        login:(uesrInfo)=>{
            dispatch(loginAction(uesrInfo))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);
