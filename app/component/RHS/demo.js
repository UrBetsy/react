import React, { useState, useReducer, createContext, useContext } from 'react'
import { destroyFns } from 'antd/lib/modal/Modal'
const Context = createContext(null)
const fns = new Set()

const PlusFirst = React.memo(() => {
    const dispatch = useContext(Context);
    return <button onClick={ () => dispatch({type: 'plus'}) }>Plus</button>
})
const PlusSecond = React.memo(() => {
    const dispatch = useContext(Context);
    return <button onClick={() => dispatch({type: 'plus2'})}>Plus2</button>
})

const Header = () => (
    <div className='list-header'>
        <span> options: </span>
        <PlusFirst ></PlusFirst>
        <PlusSecond ></PlusSecond>
    </div> 
)

const Demo = () => {
    const initState = {countFirst: 0, countSecond: 0};
    const reducer = (state, action) => {
        switch (action.type) {
            case 'plus':
                return {...state, countFirst: state.countFirst + 1};
            case 'plus2':
                return {...state, countSecond: state.countSecond + 1};
            default:
                return state           
        }
    }
    const [state, dispath] = useReducer(reducer, initState)

    return (
        <div>
            <Context.Provider value={dispath}>
                <span>------------</span>
                <Header />
                <div>function: {fns.size}</div>
                <div>count1: {state.countFirst}</div>
                <div>count2: {state.countSecond}</div>
            </Context.Provider>
        </div>
    )
}

export default Demo;