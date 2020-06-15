import React from 'react';
import BasePage from '../../component/BasePage'
import ControlPanel from '../../component/ControlPanel'

export default class About extends BasePage{

    renderContainer () {
        return (
            <div>
                <h1>我是about</h1>
                <ControlPanel />
            </div>
        )
    }
}