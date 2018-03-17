import React from 'react';
import { connect } from 'react-redux';

import HomeHeaderComponent from './homeHeader';
import MenuComponent from './menu';
import BannerComponent from './banner';
import SpecialSaleListComponent from './specialSaleList';
import SamllCartComponent from '../../../components/smallCart/index'
class HomeComponent extends React.Component{
    // constructor(){
    //     super();
    //     // console.log(helloWorldGenerator())
    // }
    render(){
        return(
            <div>
                <HomeHeaderComponent/>
                <MenuComponent/>
                <BannerComponent/>
                <SpecialSaleListComponent/>
                <SamllCartComponent/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (dispatch)=>({
    saleList:()=>{
        dispatch()
    }
})
export default connect(null,mapDispatchToProps)(HomeComponent);