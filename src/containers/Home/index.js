import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import HomeHeader from './components/HomeHeader';
import actions from '@/store/actions/home';
@connect(state=>state.home, actions)
class Home extends Component {
    render(){
        let {changeCategory} = this.props;
        return (
            <Fragment>
                <HomeHeader 
                    changeCategory={changeCategory}
                />
                <div>Home</div>
            </Fragment>
        )
    }
}

export default Home;