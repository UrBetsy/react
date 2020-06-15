import React from 'react'
import Counter from '../Counter'
import Summary from '../Summary'

export default class ControlPanel extends React.Component{

    render() {
        return (
            <div>
                <Counter caption="First" initValue={0} onUpdate = {this.onCounterUpdate}></Counter>
                <Counter caption="Second" initValue={0} onUpdate = {this.onCounterUpdate}></Counter>
                <Counter caption="Third" initValue={0} onUpdate = {this.onCounterUpdate}></Counter>
                <Summary />
            </div>
        )
    }
}