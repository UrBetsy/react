import React from 'react'

export default class ReactRouter extends React.Component{
    constructor (props) {
        super(props);
        this.send = this.send.bind(this)
        this.state = {
            countdown: this.props.countdown,
            current: this.props.countdown,
            disabled: false
        }
    }

    send() {
        let _this = this
        var { current, countdown, disabled } = this.state
        this.setState({
            disabled: true
        })
        this.timer = setInterval(() => {
            console.log(current, disabled)
            if (current > 1) {
                _this.setState({
                    current: --current
                })
            } else {
                clearInterval(this.timer)
                this.setState({
                    disabled: false,
                    current: countdown
                })
            }
        }, 1000)
    }

    render() {
        let { current, disabled } = this.state
        return (
            <div>
                <button disabled={disabled} onClick={ this.send }>
                {
                    disabled
                    ? `${current}秒后重试`
                    : '发送验证码'
                }
                </button>
            </div>
        )
    }
}