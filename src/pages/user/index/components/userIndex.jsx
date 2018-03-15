import React from 'react';
// import { connect } from 'react-redux';

import UserInfoComponent from './userInfo';
import UserHeaderComponent from './userHeader';

import UserOrderComponent from './userOrder';
import UserMenusComponent from './userMenus';



// import MenuComponent from './menu';
class UserIndexComponent extends React.Component{
    // constructor(){
    //     super();
    //     // console.log(helloWorldGenerator())
    // }
    render(){
        return(
            <div>
                <UserHeaderComponent/>
                <UserInfoComponent/>
                <UserOrderComponent/>
                <UserMenusComponent/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (state)=>({

})
export default UserIndexComponent;