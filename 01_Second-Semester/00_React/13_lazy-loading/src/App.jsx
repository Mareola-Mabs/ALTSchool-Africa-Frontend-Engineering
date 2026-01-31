// Import Route and Routes
import {Routes, Route} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import './assets/app.css'

const Avatar = lazy(()=> import('./components/Avatar')) 




// Create a Home Page Component
const Home = ()=>{

  return(
    <section className="home__container">
      <Suspense fallback={<div>Loading...</div>}>
        <Avatar />
      </Suspense>
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