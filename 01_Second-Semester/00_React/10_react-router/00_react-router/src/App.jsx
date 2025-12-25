// Import Route and Routes
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import './assets/app.css'


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
  return(
    <section className="about__container">
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