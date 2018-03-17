import React from 'react';
import {connect} from 'react-redux';
import {List,InputItem ,Button,WingBlank,Toast} from 'antd-mobile'

import {RouteProps} from 'react-router-dom'

import propTypes from 'prop-types';
class LoginFormComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // canSubmit:false,//是否可以提交
            userName:{
                value:'',
                hasError:false
            },
            password:{
                value:'',
                hasError:false
            }
        }
    }
    submitLogin(){
        this.props.login({
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
        });
    }
    changeValue(typeName,e){
        let canSub;
        const inputObj = {};
        const value = e.replace(/\s/g,'');
        inputObj[typeName]={...this.state[typeName],value}
        this.setState(inputObj); //注意：this.state刚设置完state立即调用，是旧值
        console.log(value,/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,20}$/.test(value))
        if(
            (typeName === 'userName' && !/1(3[0-9]|5[012356789]|7[015678]|8[0-9]|4[57])\d{8}/.test(value)) ||
            (typeName === 'password' && !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,20}$/.test(value))
        ){
            inputObj[typeName].hasError = true;
        } else{
            inputObj[typeName].hasError = false; //合并无错误提示对象
        }
        // if(inputObj['userName'] && !inputObj['userName'].hasError && !inputObj['password'].hasError){
        //     canSub=true;
        // } else{
        //     canSub=false;
        // }
        return this.setState(inputObj);
    }
    showError(typeName){
        let errInfo = '';
        if(this.state[typeName].hasError){
            if(typeName === 'userName' ){
                errInfo = '请正确输入手机号';
            } else if(typeName === 'password'){
                errInfo = '密码为8~20位字母、数字或符号组合';
            }
        }
        Toast.info(errInfo);
    }
    componentWillUpdate(){
        // console.log(this.state)
    }
    componentDidUpdate(){
        if(Object.keys(this.props.uesrInfo).length){
            Toast.info('登陆成功！',3,()=>{
                this.props.history.goBack();
            });
        }
    }
    render(){
        let canSub = !this.state['userName'].hasError && this.state['userName'].value
        && !this.state['password'].hasError && this.state['password'].value;
        
        return(
            <div className="mt20">
                <List>
                    <InputItem
                        type="phone"
                        clear
                        placeholder="请输入手机号"
                        error={this.state.userName.hasError}
                        onErrorClick={()=>this.showError('userName')}
                        onChange={(e)=>this.changeValue('userName',e)}
                    >登录名</InputItem>
                    <InputItem
                        type="password"
                        clear
                        maxLength="20"
                        placeholder="请输入密码"
                        error={this.state.password.hasError}
                        onErrorClick={()=>this.showError('password')}
                        onChange={(e)=>this.changeValue('password',e)}
                    >密码</InputItem>
                </List>
                <WingBlank className="mt20">
                    <Button 
                        type="primary" 
                        onClick={this.submitLogin.bind(this)} 
                        disabled={!canSub}
                    >登录</Button>
                </WingBlank>
            </div>
        )
    }
}

// LoginFormComponent.propTypes = {
//     uesrInfo: propTypes.object.isRequired
// };

export default LoginFormComponent;