import React from 'react';
function decoratorclass(target) {
    target.prototype.getFn = function() {
        alert('我是装饰器的方法');
    }
}
function decoratorproperty(target, name, descriptor) {
    console.log(target, name, descriptor)
    return descriptor;
    /**
     * 打印这三个参数：类，属性名，属性
     * Component {constructor: ƒ, render: ƒ} 
     * "render" 
     * {writable: true, enumerable: false, configurable: true, value: ƒ}
     */
}
@decoratorclass
export default class DecoratorDemo extends React.Component{
    getFn () {
        alert('我是class的方法')
    }
    @decoratorproperty
    render () {
        return (
            <div>
                <p onClick={this.getFn.bind(this)}>我是装饰器，点击我试试</p>
            </div> 
        )
    }
}