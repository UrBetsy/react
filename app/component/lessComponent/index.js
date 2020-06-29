import React from 'react'

export default class ReactRouter extends React.Component{
    constructor (props) {
        super(props);
        this.state = { 
            count: 0,
        }
    }

    render() {
        let { count } = this.state
        return (
            <div>
                <h1>我是less</h1>
                <div>参考：https://juejin.im/post/5a2bc28f6fb9a044fe464b19#heading-9</div>
                <h1>变量</h1>
                <h3>变量值</h3>
                <div className='div-1'>我是1</div>
                <h3>选择器变量</h3>
                <div className='div-2'>我是2</div>
                <h3>属性变量</h3>
                <div className='div-3'>我是3</div>
                <h3>url变量</h3>
                <div className='div-4'>我是4</div>
                <h3>声明变量</h3>
                <div className='div-5'>我是5</div>
                <h3>变量运算</h3>
                <div className='div-6'>我是6</div>
                <h3>变量作用域</h3>
                <div className='div-7'>我是7</div>
                <h3>用变量替换变量</h3>
                <div className='div-8'>我是8</div>
                <h1>嵌套</h1>
                <h3>&的妙用</h3>
                <div className='div-9'>
                    <div className='div-9-child1'>div-9-child1</div>
                    <div className='div-9-child2'>div-9-child2</div>
                </div>
                <h3>媒体查询</h3>
                <h3>定义私有样式</h3>
                <h1>混合方法</h1>
                <h3>无参数方法</h3>
                <div className='div-10'>我是10</div>
                <div className='div-11'>我是11</div>
                <h3>默认参数方法</h3>
                <div className='div-12'>我是12</div>
                <h3>方法的匹配模式</h3>
                <div className='div-13'>我是13</div>
                <h3>方法的命名空间</h3>
                <div className='div-14'>我是14</div>
                <h3>方法的筛选</h3>
                <div className='div-15'>我是15</div>
                <h3>数量不定的参数</h3>
                <div className='div-16'>我是16</div>
                <h3>使用important</h3>
                <div className='div-17'>我是17</div>
                <h3>循环方法</h3>
                <div className='div-18'>我是18
                    <div className='column-1'>column-1</div>
                    <div className='column-2'>column-2</div>
                    <div className='column-3'>column-3</div>
                    <div className='column-4'>column-4</div>
                </div>
                <h3>属性拼接</h3>
                <div className='div-19'>我是19</div>
            </div>
        )
    }
}