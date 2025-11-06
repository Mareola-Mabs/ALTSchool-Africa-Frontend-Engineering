// Importing Components
import Greeting from "./Greeting"
import {ListItem, NewListItems, newListItems} from './ListItem'

import '../assets/css/profilecard.css'

// User Profile card Component
const UserProfileCard = ()=>{
  return(
    <div>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" style={{width:100}}/>
      <div className="name">Obama Barack</div>

    {/* Call The Greeting Component */}
      <Greeting/>

    {/* Call the  list component*/}
        <ol>
            <ListItem/>
            {newListItems}
      </ol>
    </div>

    
  )
}

export default UserProfileCard