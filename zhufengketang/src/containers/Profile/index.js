import React,{Component} from 'react';
import './index.less';
import profile from '@/images/profile.png';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
@connect(state=>state.session)
export default class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <img src={profile}/>
                {
                    this.props.user?<a>{this.props.user.username}</a>:<Link to="/login">登录</Link>
                }
                
            </div>
        )
    }
    /**
     * 1. 受保护的导航 PrivateRoute
     * 2. 刷新后自动获取登录状态
     * 3. 手写一个react-router-redux
     * 
     * 四期
     * 1. 热更新的原理 hotModuleReplace
     * 2. 手写webpack(acron) esprima estraverse escodegen
     * 3. 源码
     * 
     * webpack
     * 1. AST
     * 2. 源码(类图  流程图)
     * 3. 自定义loader style css babel url file ...
     * 4. 自定义插件 
     * 5. 手写webpack
     */