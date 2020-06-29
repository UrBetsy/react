import React from 'react';
import ClickCounter from '../../component/ClickCounter'
import TimerButton from '../../component/TimerButton'
import RHS from '../../component/RHS/index'
import Demo from '../../component/RHS/demo'
import DecoratorDemo from '../../component/DecoratorDemo/index'
import LessComponent from '../../component/lessComponent/index'

export default class Home extends React.Component{
    render () {
        return (
            <div className = "home-container">
                <ClickCounter />
                <TimerButton countdown = {10}/>
                <RHS />
                <Demo />
                <DecoratorDemo />
                <LessComponent />
            </div> 
        )
    }
}