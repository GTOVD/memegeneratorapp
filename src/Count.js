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


/*

setSquare(prevState => { return prevState.map((square) => { return square.id === id ?  { ...prevstate[id], on: !square.on } : square })})

function toggle(id){
    setSquare(prevSquare => {
        return prevSquare.map((square) => { 
            return square.id === id ? {...square, on: !square.on} : square 
        })
    })
}

const [isShown, setIsShown] = React.useState(false)
function toggle(){
    setIsShown(prevState => !prevState)
}

{isShown && <p>{props.punchline}</p>}
<button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>

<div>
    {messages.length === 0 ? <h1>You have {messages.length} unread message {messages.length > 1 ? "messages" : "message"}!</h1> : <h1>You are all cought up</h1>}
</div>

*/