import { useState } from "react"


// Handle click event
// const handleClick = (event)=>{
//     console.log("Hello, you clicked me", "The event type is:", event.type)

// }



export default function Button(){
    const [counter, setCounter] = useState(0)


    const increment = ()=>{
        setCounter(counter + 1)
    }
    const decrement = ()=>{
        setCounter(counter - 1)
    }

    return <div>
        <div>{counter}</div>
        <button onClick={increment} className="increment">Increment</button>
        <button onClick={decrement} className="decrement">Decrement</button>
    </div>
}