import React from "react";
import {Link} from 'react-router-dom'

class HomeHeaderComponent extends React.Component {
    render() {
        return (
            <div className="wap-page-header J-page-header">
                <header className="normal-header">
                    <div className="header-left">
                        <div className="header-location">
                            <a href="javascript:;" className="J-warehouse-btn">
                                <span>上海</span>
                                <i className="icon-arrow-down" />
                            </a>
                        </div>
                    </div>
                    <div className="header-title">
                        <a href="javascript:;" className="header-search ">
                            <i className="icon-search" />
                            焕新红包馆
                        </a>
                    </div>
                    <div className="header-right">
                        <Link to="/user">
                            <i className="icon-member" />
                        </Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default HomeHeaderComponent;
