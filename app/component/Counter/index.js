import React from 'react'

export default class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: props.initValue || 0
        }
    }

    componentWillReceiveProps (nextProps) {
        console.log('enter componentWillReceiveProps' + this.props.caption)
    }

    onClickIncrementButton() {
        this.updateCount(true)
    }
    onClickDecrementButton() {
        this.updateCount(false)
    }

    updateCount (isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue -1;
        this.setState({count: newValue})
        this.props.onUpdate(newValue, previousValue)
    }

    render() {
        const { caption } = this.props;
        let { count } = this.state
        return (
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {count}</span>
            </div>
        )
    }
}