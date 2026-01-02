// Import Route and Routes
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {flushSync} from 'react-dom'
import './assets/app.css'


// Create a Home Page Component
const Home = ()=>{
  // List of news items
  const newsItems = [
    {
      id: 1,
      title: "This is the first news item",
      url: "https://www.google.com",
      urlToImage : "https://www.google.com/logos/doodles/2026/new-years-day-2026-6753651837110748.2-la1f1f1f.gif"
    },
    {
      id: 2,
      title: "This is the second news item",
      url: "https://www.google.com",
      urlToImage : "https://www.google.com/logos/doodles/2026/new-years-day-2026-6753651837110748.2-la1f1f1f.gif"
    },
    {
      id: 3,
      title: "This is the third news item",
      url: "https://www.google.com",
      urlToImage : "https://www.google.com/logos/doodles/2026/new-years-day-2026-6753651837110748.2-la1f1f1f.gif"
    },
    {
      id: 4,
      title: "This is the fourth news item",
      url: "https://www.google.com",
      urlToImage : "https://www.google.com/logos/doodles/2026/new-years-day-2026-6753651837110748.2-la1f1f1f.gif"
    },
    {
      id: 5,
      title: "This is the fifth news item",
      url: "https://www.google.com",
      urlToImage : "https://www.google.com/logos/doodles/2026/new-years-day-2026-6753651837110748.2-la1f1f1f.gif"
    },
  ]

const [currentItem, setCurrentItem] = useState(0)
const [news, currentNews] = useState(null)



  // Handle Next
  const handleNext = (e)=>{
    e.preventDefault()
    if (currentItem !== newsItems.length-1){
      setCurrentItem(currentItem => currentItem+1)
    }
  }

  // Handle Prev
  const handlePrev = (e)=>{
    e.preventDefault()
      if(currentItem !== 0){
        setCurrentItem(currentItem => currentItem-1)
      }
  }

  // Create a list of news items
  const newsList = newsItems.map(item =>{
    return <div key={item.id} className='news-item'>
      <h2>{item.title}</h2>
      <p>{item.url}</p>
      <a href={item.urlToImage}>{item.url}</a>
    </div>
  })

  return(
    <section className="home__container">

      <div className="paginate">
        <button className="prev" onClick={handlePrev}>Prev</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>

      <section className="news">{newsList[currentItem]}</section>
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