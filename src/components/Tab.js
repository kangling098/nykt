import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
export default class Tab extends Component {
    render(){
        return (
            <nav>
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