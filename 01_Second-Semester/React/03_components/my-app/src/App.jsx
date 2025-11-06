// Create a Component
const About = ()=>{
  return (
    <p>Hello There! Good Morning</p>
  )
}

// User Profile card Component
const UserProfileCard = ()=>{
  return(
    <div>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" style={{width:100}}/>
      <div className="name">Obama Barack</div>
    </div>
  )
}


// Working With Lists
const ListItem = ()=>{
  const listItems = ['Ford', 'Toyota', 'Mercedes', 'Ferrari']
  
  return listItems.map(item => {
    return <li key={item}>{item}</li>
  })
}





// Create root Component
const App = () =>{
  return (
    <section className="main__page">
      {/* Call The UserProfileCard Component */}
      <UserProfileCard/>

      {/* Call The About Component */}
      <About/>

      <ol>
        <ListItem/>
      </ol>
    </section>
  )
}

export default App