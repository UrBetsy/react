import React from 'react';
import ClickCounter from '../../component/ClickCounter'
import TimerButton from '../../component/TimerButton'
import  './index.less';

export default class Home extends React.Component{
    render () {
        return (
            <div className = "home-container">
                <ClickCounter />
                <TimerButton countdown = {10}/>
            </div> 
        )
    }
}