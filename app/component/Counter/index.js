import React from 'react'
import * as Actions from '../../Actions.js'
import store from '../../Store.js'

export default class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        };
    }

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange)
    }

    onChange() {
        this.setState(this.getOwnState())
    }

    onClickIncrementButton() {
        store.dispatch(Actions.increment(this.props.caption))
    }
    onClickDecrementButton() {
        store.dispatch(Actions.decrement(this.props.caption))
    }

    render() {
        const { caption } = this.props;
        let { value } = this.state
        return (
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}