import React, { useState, useEffect } from 'react'

function RHS() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('lifan');
    const [age, setAge] = useState({
        age:23
    });

    useEffect(() => {
        setName('haha')
    });

    return (
        <div>
            <div>我是react hooks</div>
            <div>你看一下 {count}</div> 
            <button onClick={() => { setCount (count +1)}}>
                click me
            </button>
            <div>你看一下name {name}</div> 
            <div>你看一下age {age.age}</div> 
        </div>
    )
}

export default RHS;