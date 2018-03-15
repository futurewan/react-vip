import React from "react";
import { List } from 'antd-mobile';
const Item = List.Item;
class UserMenusComponent extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     data: [1, 2, 3, 4, 5]
        // };
    }

    render() {
        return (
            <List className="user-menus">
                <Item arrow="horizontal">我的收藏</Item>
                <Item arrow="horizontal">购物车历史</Item>
                <Item arrow="horizontal">浏览历史</Item>
                <Item arrow="horizontal">申请售后</Item>
                <Item arrow="horizontal">零钱</Item>
                <Item arrow="horizontal">优惠券</Item>
                <Item extra={<span className="highlight">手机绑定，资金更安全</span>} arrow="horizontal">我的唯品币</Item>
                <Item arrow="horizontal">收货地址</Item>
                <Item arrow="horizontal">修改登录密码</Item>
                <Item arrow="horizontal">管理支付密码</Item>
                <Item arrow="horizontal">绑定手机</Item>
                <Item arrow="horizontal">支付红包</Item>
                <Item arrow="horizontal">实名认证</Item>
                <Item arrow="horizontal">我的银行卡</Item>
            </List>
        );
    }
}
// const style = {
//     .am-list-item .am-list-line .am-list-content, .am-list-item .am-list-line .am-list-extra{

//     }
// }
export default UserMenusComponent;
