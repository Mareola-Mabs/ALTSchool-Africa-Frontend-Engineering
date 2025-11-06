// Importing Components
import Greeting from "./components/Greeting"
import UserProfileCard from "./components/ProfileCard"
import {ListItem, NewListItems, newListItems} from './components/ListItem'


// Create root Component
const App = () =>{
  return (
    <section className="main__page">
      {/* Call The UserProfileCard Component */}
      <UserProfileCard/>

      {/* Call The Greeting Component */}
      <Greeting/>

      <ol>
        <ListItem/>
        {newListItems}
      </ol>
    </section>
  )
}

export default App