import React from 'react';
import ClickCounter from '../../component/ClickCounter'
import TimerButton from '../../component/TimerButton'
import RHS from '../../component/RHS/index'
import Demo from '../../component/RHS/demo'
import style from './index.less'

export default class Home extends React.Component{
    render () {
        console.log(style) // 这里可以看到编码后的className
        return (
            <div className = {style.home_container}>
                <ClickCounter />
                <TimerButton countdown = {10}/>
                <RHS />
                <Demo />
            </div> 
        )
    }
}