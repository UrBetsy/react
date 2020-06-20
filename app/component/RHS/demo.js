import React, { useState, createContext, useContext } from 'react'
import { destroyFns } from 'antd/lib/modal/Modal'
const Context = createContext(null)
const fns = new Set()

const PlusFirst = React.memo(({plus}) => {
    const api = useContext(Context);
    return <button onClick={api.plus}>Plus</button>
})
const PlusSecond = React.memo(({plus2}) => {
    const api = useContext(Context);
    return <button onClick={api.plus2}>Plus2</button>
})

const Header = React.memo(({plus, plus2}) => {
    return (
        <div className='list-header'>
            <span> options: </span>
            <PlusFirst plus = {plus}></PlusFirst>
            <PlusSecond plus2 = {plus2}></PlusSecond>
        </div> 
    )
    
})

const Demo = () => {
    const [countFrist, setCountFirst] = useState(0);
    const [countSecond, setCountSecond] = useState(0);

    const plus = () => setCountFirst(countFrist + 1);
    const plus2 = () => setCountSecond(countSecond + 1);

    fns.add(plus)
    fns.add(plus2)

    return (
        <div>
            <Context.Provider value={{plus, plus2}}>
                <span>------------</span>
                <Header />
                <div>function: {fns.size -2 }</div>
                <div>count1: {countFrist}</div>
                <div>count2: {countSecond}</div>
            </Context.Provider>
        </div>
    )
}

export default Demo;