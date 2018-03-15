import React from "react";
class MenuComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            startX: 0, // touch开始位置
            diffLength: 0,
            ts: {
                transform: `translateX(0px)`
            }
        };
        this.startMenu = this.startMenu.bind(this);
        this.moveMenu = this.moveMenu.bind(this);
        this.endMenu = this.endMenu.bind(this);
    }

    startMenu(e) {
        this.setState({
            MClientX: e.touches[0].clientX
        });
    }
    moveMenu(e) {
        // targetTouches 处于touch状态
        let nowdiff = e.touches[0].clientX - this.state.MClientX;
        // console.log('move',nowdiff,e.touches[0].clientX)
        this.setState({
            // diffLength:this.state.diffLength+nowdiff,
            ts: {
                transform: `translateX(${this.state.diffLength + nowdiff}px)`
            }
        });
    }
    endMenu(e) {
        let nowdiff = e.changedTouches[0].clientX - this.state.MClientX;
        let finalDiff = nowdiff + this.state.diffLength;
        const ulWidth = document.getElementById("menuUl").offsetWidth;
        if (finalDiff > 0) {
            finalDiff = 0;
        }
        if (Math.abs(finalDiff) > ulWidth - document.body.offsetWidth) {
            finalDiff = -(ulWidth - document.body.offsetWidth);
        }
        this.setState({
            diffLength: finalDiff,
            ts: {
                transform: `translateX(${finalDiff}px)`
            }
        });
    }
    render() {
        return (
            <div id="J-main-menu">
                {this.state.translateL}
                <div className="wap-main-menu J-main-menu">
                    <div className="nav-index" id="J-menu">
                        <ul
                            id="menuUl"
                            onTouchStart={this.startMenu}
                            onTouchMove={this.moveMenu}
                            onTouchEnd={this.endMenu}
                            className="equal-table clearfix"
                            // ref={(el)=>{
                            //     el&&(ulWidth=el.offsetWidth)
                            // }}
                            style={this.state.ts}
                        >
                            <li className="J-nav-current nav-current">
                                <a href="javascript:;">
                                    <span>今日推荐</span>
                                </a>
                            </li>
                            <li data-menu-id="1388" className="">
                                <a href="javascript:;">
                                    <span>3.16春上新</span>
                                </a>
                            </li>
                            <li data-menu-id="1391" className="">
                                <a href="javascript:;">
                                    <span>时尚</span>
                                </a>
                            </li>
                            <li data-menu-id="1377" className="">
                                <a href="javascript:;">
                                    <span>美妆</span>
                                </a>
                            </li>
                            <li data-menu-id="1340" className="">
                                <a href="javascript:;">
                                    <span>居家</span>
                                </a>
                            </li>
                            <li data-menu-id="1339" className="">
                                <a href="javascript:;">
                                    <span>母婴</span>
                                </a>
                            </li>
                            <li data-menu-id="1341" className="">
                                <a href="javascript:;">
                                    <span>国际</span>
                                </a>
                            </li>
                            <li data-menu-id="1470" className="">
                                <a href="javascript:;">
                                    <span>唯品·奢</span>
                                </a>
                            </li>
                            <li data-menu-id="1390" className="">
                                <a href="javascript:;">
                                    <span>生活</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuComponent;
