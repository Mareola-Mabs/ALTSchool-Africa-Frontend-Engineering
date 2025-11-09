// UseEffect Hooks in React
import { useState, useEffect, use } from "react"

const Content = ()=>{
  // Run Once OnMount
  useEffect(()=>{
    console.log("Components Mounted");
  }, [])

}

const Content2 = ()=>{
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    counter >=1? console.log("Counter Changed") : null
  }, [counter])

  return <button onClick={()=>setCounter(counter + 1)}>Click Me</button>
}



const Loader = ()=>{
  return <div className="loader">Loading...</div>
}

const Text = ()=>{
  return <div className="text">React is a popular JavaScript library for building user interfaces,
    developed by Facebook. It allows developers to create reusable UI
    components, making code more maintainable and modular. Unlike
    traditional web applications, React uses a virtual DOM to update only
    the parts of the page that change, improving performance. It supports
    single-page applications, enabling smooth navigation without full page
    reloads. React’s component-based architecture encourages separation of
    concerns, making development scalable for large projects. Developers can
    manage state within components using hooks like useState and useEffect.
    React also integrates easily with other libraries and frameworks,
    providing flexibility for complex applications. Its ecosystem includes
    tools like React Router for navigation and Redux for state management.
    JSX, a syntax extension used in React, allows writing HTML-like code
    inside JavaScript. Overall, React has become one of the most widely
    adopted frameworks for modern web development.</div>
}


// Timer Component
const Timer = ()=>{
  const [seconds, setSeconds] = useState(0)


  useEffect(()=>{
    if (seconds >= 10){
      return
    }
    const timeout = setTimeout(()=>{
      setSeconds(seconds + 1)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [seconds])


return <div className="display">{seconds %2 === 0? <Text/> : <Loader/>}</div>

}




// Create root Component
const App = () =>{

  return (
    <div>
      <Content/>
      <Content2/>
      <Timer/>
    </div>
  )
}





export default App