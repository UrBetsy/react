import React from 'react'
import CounterStore from '../../store/CounterStore.js'
import * as Actions from '../../Actions.js'

export default class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange)
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption]
        this.setState({
            count: newCount
        })
    }

    onClickIncrementButton() {
        Actions.increment(this.props.caption)
    }
    onClickDecrementButton() {
        Actions.decrement(this.props.caption)
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