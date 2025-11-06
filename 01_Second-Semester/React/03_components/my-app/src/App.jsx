// Importing Components
import UserProfileCard from "./components/ProfileCard"



// Create root Component
const App = () =>{
  return (
    <section className="main__page">
      
      {/* Call The UserProfileCard Component */}
      <UserProfileCard/>
    </section>
  )
}

export default App