import React from "react";

class UserOrderComponent extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     data: [1, 2, 3, 4, 5]
        // };
    }

    render() {
        return (
            <div className="user-order border-b J-user-order">
                <a href="javascript:;" className="item J-order-login">
                    <p className="order-icon">
                        <span>
                            <i className="icon-pay" />
                            <strong />
                        </span>
                    </p>
                    <p className="order-desc">
                        <span>待付款</span>
                    </p>
                </a>
                <a href="javascript:;" className="item J-order-login J-unreceive">
                    <p className="order-icon">
                        <span>
                            <i className="icon-deliver" />
                            <strong />
                        </span>
                    </p>
                    <p className="order-desc">
                        <span>待收货</span>
                    </p>
                </a>
                <a href="javascript:;" className="item J-order-login">
                    <p className="order-icon">
                        <span>
                            <i className="icon-orders" />
                        </span>
                    </p>
                    <p className="order-desc">
                        <span>全部订单</span>
                    </p>
                </a>
            </div>
        );
    }
}

export default UserOrderComponent;
