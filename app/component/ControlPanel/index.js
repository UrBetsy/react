import React from 'react'
import Counter from '../Counter'

export default class ControlPanel extends React.Component{
    constructor (props){
        super(props);
        this.onCounterUpdate =  this.onCounterUpdate.bind(this);
        this.initValue = [0, 10, 20]
        const initSum = this.initValue.reduce((a, b) => a + b, 0)
        this.state = {
            sum: initSum
        }
    }

    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({
            sum: this.state.sum + valueChange
        })
    }

    render() {
        let { sum } = this.state
        return (
            <div>
                <Counter caption="First" initValue={0} onUpdate = {this.onCounterUpdate}></Counter>
                <Counter caption="Second" initValue={0} onUpdate = {this.onCounterUpdate}></Counter>
                <Counter caption="Third" initValue={0} onUpdate = {this.onCounterUpdate}></Counter>
                <p>total: {sum}</p>
                <button onClick = { () => this.forceUpdate() }>
                    clickme to repaint!
                </button>
            </div>
        )
    }
}