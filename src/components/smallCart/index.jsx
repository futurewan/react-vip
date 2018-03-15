import React from 'react';
class SamllCartComponent extends React.Component {
    render(){
        return(
            <div className="u-shopbag J-cart-cmp">
                <a href="javascript:;" className="J-cart-btn">
                    <span className="icon-cart i-flow-carticon"></span>
                    <span className="u-flow-cartnum J-cart-num"></span>
                    <span className="u-flow-carttime"></span>
                </a>
            </div>
        )
    }
}

export default SamllCartComponent;