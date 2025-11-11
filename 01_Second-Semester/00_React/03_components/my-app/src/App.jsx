// Importing Components
import UserProfileCard from "./components/ProfileCard"
import UserProfile from "./components/UserProfile"



// Create root Component
const App = () =>{
  return (
    <div className="main__page">

      {/* Call The UserProfileCard Component */}
      <UserProfileCard/>


      <UserProfile/>
    </div>
  )
}

export default App