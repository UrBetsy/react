import React, { useState } from 'react'

const PlusFirst = React.memo(({plus}) => {
    return <button onClick={plus}>Plus</button>
})
const PlusSecond = React.memo(({plus2}) => {
    return <button onClick={plus2}>Plus2</button>
})

const Header = React.memo(({plus, plus2}) => {
    console.log('haha', plus);
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

    return (
        <div>
            <span>------------</span>
            <Header plus = {plus} plus2 = {plus2} ></Header>
            <div>count1: {countFrist}</div>
            <div>count2: {countSecond}</div>
        </div>
    )
}

export default Demo;