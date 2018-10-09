import React,{Component,Fragment} from 'react';
import {NavLink} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import './index.less'
export default class HomeHeader extends Component {
    state = {
        menuShow: false
    }
    toggleMenu = ()=>{
        this.setState({
            ...this.state,
            menuShow:!this.state.menuShow
        })
    }
    render(){
        let {menuShow,changeCategory} = this.state;
        return (
            <Fragment>
                <header className="index-header">
                    <div className="index-header-container">
                        <div className="common-logo"></div>
                        <div onClick={this.toggleMenu} className="header-nav-btn">
                            {
                                menuShow ? <i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>
                            }
                        </div>
                    </div>
                    
                    <TransitionGroup>
                        {
                            menuShow&&(
                                <CSSTransition
                                    timeout={500}
                                    classNames='fade'
                                >
                                    <ul className="header-nav-content" onClick={changeCategory}>
                                        <li data-category="react">
                                            react
                                        </li>
                                        <li data-category="vue">
                                            vue
                                        </li>
                                    </ul>
                                </CSSTransition>
                                
                            )
                        }
                    </TransitionGroup>
                    
                    
                </header>
            </Fragment>
        )
    }
}
