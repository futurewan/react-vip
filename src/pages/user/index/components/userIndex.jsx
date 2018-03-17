import React from 'react';
import { connect } from 'react-redux';

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
        console.log(this.props)
        return(
            <div>
                <UserHeaderComponent history={this.props.history}/>
                <UserInfoComponent {...this.props}/>
                <UserOrderComponent/>
                <UserMenusComponent/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    userInfo:state.userInfo
})

const mapDispatchToProps = (state)=>({

})
export default connect(mapStateToProps,null)(UserIndexComponent);