import React from 'react';
import Count2 from './Count2';

export default function Count () {
    const [count, setCount] = React.useState(0)
    function incrementCount(){
        setCount(prevCount => prevCount + 1)
    }
    function decrementCount(){
        setCount(prevCount => prevCount - 1)
    }
    return (
        <main>
            <div>
                <button className="counter--minus" onClick={decrementCount}>-</button>
                <Count2 number={count}/>
                <button className="counter--plus" onClick={incrementCount}>+</button>
            </div>
        </main>
    )
}