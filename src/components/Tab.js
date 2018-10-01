import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './tab.less'



export default class Tab extends Component {
    render(){
        return (
            <nav className="common-tab">
                <NavLink to="/">
                    <i className="iconfont icon-xingqiu"></i>
                    首页
                </NavLink>
                <NavLink to="/mine">
                    <i className="iconfont icon-xingqiu"></i>
                    我的课程
                </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-xingqiu"></i>
                    个人中心
                </NavLink>
            </nav>
            
        )
    }
}
