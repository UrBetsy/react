import React from 'react'

export default class ReactRouter extends React.Component{
    constructor (props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = { 
            count: 0,
        }
    }

    onClickButton() {
        let { count } = this.state
        this.setState({
            count: ++count
        })
    }

    render() {
        let { count } = this.state
        return (
            <div>
                <button onClick = {this.onClickButton}>Click Me</button>
                <div>Click count: {count}</div>
            </div>
        )
    }
}