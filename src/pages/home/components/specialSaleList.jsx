import React from "react";
import {axiosAjax} from '../../../lib/api';
const brandsdata = require("../../../assets/database/specialSaleList.json");
class SpecialSaleListComponent extends React.Component {
    constructor() {
        super();
        console.log(brandsdata);
        this.state = {
            brands: brandsdata[0].result.data.brands
        };
    }

    componentWillMount(){
        // axiosAjax({
		// 	url:'users',
		// 	params:{
		// 		iPage:1,
		// 		pageSize:3
		// 	}
		// }).then(data=>{
        //     console.log(data)
        // })
    }



    pms_activetips(pms_activetips){
        if (pms_activetips) {
            return(<div className="pms">
                <img src="//ms2-m.vipstatic.com/static/base/img/icon-pms-11e8ab1678.png"/>
                {pms_activetips}
            </div>)
        } else {
            return null;
        }
    }
    render() {
        return (
            <div className="brand-list">
                <div className="u-brand-wrap">
                    <div className="u-brand-list">
                        <div className="J-list-page list-view-page">
                            {this.state.brands.map(item => {
                                if (item.brand_id) {
                                    return (
                                        <div
                                            key={item.brand_id}
                                            className="u-brand J-u-brand"
                                        >
                                            <div className="p-relative">
                                                <a href="javascript:">
                                                    <img
                                                        src={
                                                            item.mobile_image_one
                                                        }
                                                    />
                                                </a>
                                            </div>
                                            <div className="u-brand-msg has-pms clearfix">
                                                <p className="u-brand-name">
                                                    <span className="u-brand-discount"><span></span></span>
                                                    {item.brand_name}
                                                </p>
                                                <div className="J-brand-leavetime u-brand-time">
                                                    剩{Math.floor((item.sell_time_to-item.sell_time_from)/3600/24)}天
                                                </div>
                                                { this.pms_activetips(item.pms_activetips)}
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecialSaleListComponent;
