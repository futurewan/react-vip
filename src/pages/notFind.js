import React from 'react';
import {Link} from 'react-router-dom'

class NotFind extends React.Component{
    render(){
        return(
            <div>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}


export default NotFind;