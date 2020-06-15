import React from 'react';
import  './index.less';

export default class BasePage extends React.Component{
    renderContainer () {
        return (
            <div></div>
        )
    }

    render () {
        return (
            <div className = "container">
                {this.renderContainer()}
            </div> 
        )
    }
}