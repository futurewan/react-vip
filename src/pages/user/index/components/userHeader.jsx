import React from "react";
import {Link} from 'react-router-dom'
class UserHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        // this.state = {
        //     data: [1, 2, 3, 4, 5]
        // };
    }

    render() {
        return (
            <header className="wap-simple-header">
                <div className="header-left">
                    <a onClick={this.props.history.goBack} className="header-left-button">
                        <i className="icon-back" />
                    </a>
                </div>
                <div className="header-title">
                    <h1>个人中心</h1>
                </div>
                <div className="header-right">
                    <Link to="/" className="header-right-button">
                        <i className="icon-home" />
                    </Link>
                </div>
            </header>
        );
    }
}

export default UserHeaderComponent;
