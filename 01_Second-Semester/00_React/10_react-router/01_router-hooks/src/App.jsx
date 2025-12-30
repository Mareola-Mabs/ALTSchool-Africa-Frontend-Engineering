// Import Route and Routes
import {Routes, Route, Link, NavLink, useSearchParams} from 'react-router-dom'
import './assets/app.css'
import { useEffect } from 'react'


// Create a Home Page Component
const Home = ()=>{
  return(
    <section className="home__container">
      <h1>Home Page</h1>
      <a href="/about" className='navigate'>About</a> {/* This will cause a page reload*/}
    </section>
  )
}

// Create About Page Component
const About = ()=>{

  // useSearchParams Hook
  const [searchParams, setSearchParams] = useSearchParams()

  const switchPage = ()=>{
    setSearchParams(prev => {
      prev.set("page", 20); return prev // This sets a parameter, while keeping the previous ones
    })

    // setSearchParams({page: 20, category: "phone"}) // Can be used to set one or more parameters without keeping the previous ones
  }

  console.log(searchParams.get('page'))



  // Get the search param values


  return(
    <section className="about__container">
      <button onClick={switchPage}>Go to Page 20</button>
      <h1>About Page</h1>
      <Link className='navigate' to="/">Home</Link> {/* This will not cause a page reload */}
      <NavLink style={({isActive})=> isActive? {color: 'red'}: {color: 'blue'}} className='navigate' to="/">Home</NavLink> {/* This will not cause a page reload */}
      <NavLink style={({isActive})=> isActive? {color: 'red'}: {color: 'blue'}} className='navigate' to="/about">About</NavLink> {/* This will not cause a page reload */}
    </section>
  )
}


// Root Component
const App = ()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App