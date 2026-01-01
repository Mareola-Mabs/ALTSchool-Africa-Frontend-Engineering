// Import Route and Routes
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './assets/app.css'


// Create a Home Page Component
const Home = ()=>{
  const [state, setState] = useState(0)

  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  function changeState(){

    // Here, React Batches all state, and render them as one, so "state" only increases by one instead of three
    setState(state+1) 
    setState(state+1) 
    setState(state+1) // Batching occurs when code runs

    // Here, we are telling React to use add an increment from the previous value, so "state" increases by four in total
    setState(state=> state+1) 
    setState(state=> state+1)
    setState(state=> state+1) // No Batching when code runs
  }


  function timeout(delay){
    return new Promise((res, rej)=>{
      setTimeout(()=>{
      console.log("Hello")
      res()
    }, delay)
    })
  }

  async function buy(){
    setPending(pending => pending + 1)

    await timeout(3000)

    setPending(pending => pending - 1)
    setCompleted(completed => completed + 1)
  }

  return(
    <section className="home__container">
      <button onClick={changeState}>Click Me</button>

      <button onClick={buy}>Buy</button>

      <div>This is the state: {state}</div>

      <div>Pending: {pending}</div>
      <div>Completed: {completed}</div>
    </section>
  )
}


// Root Component
const App = ()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App