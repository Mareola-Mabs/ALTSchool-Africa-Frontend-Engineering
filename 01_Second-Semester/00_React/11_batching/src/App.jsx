// Import Route and Routes
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './assets/app.css'


// Create a Home Page Component
const Home = ()=>{
  const [state, setState] = useState(0)

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

  return(
    <section className="home__container">
      <button onClick={changeState}>Click Me</button>

      <div>This is the state: {state}</div>
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