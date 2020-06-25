import React from 'react';
import BasePage from '../../component/BasePage'
/**
 * 
 * 这里是用装饰器实现防抖节流
 */
// 节流（定时器实现）
function throttle(count) {
    count = count || 1000
    let flag = true;
    return (target, key, descriptor) => {
        let func = descriptor.value
        descriptor.value = (...args) => {
            if(!flag) return  // 一定的时间内只能触发一次
            flag = false
            func.apply(this, ...args)
            setTimeout(() => {
                flag = true
            }, count)
        }
    }
}
// 防抖
function debounce(count) {
    count = count || 1000
    return (target, key, descriptor) => {
        let func = descriptor.value
        let timer = null
        descriptor.value = (...args) => {
            if(timer) clearTimeout(timer) 
            timer = setTimeout(() => {
                func.apply(this, ...args)
            }, count) 
        }
    }
}

export default class DecoratorDemo extends BasePage{
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    // @throttle(1000)
    @debounce(1000)
    handleScroll() {
        console.log('我在监听')
    }
    renderContainer () {
        return (
            <div >
                <h1>我要实现防抖节流</h1>
                <div className='container'></div>
            </div>
        )
    }
}