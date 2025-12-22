import { createContext, useContext, useState } from "react"

// Creating a Context
const AuthContext = createContext({
  username: "",
  email: "",
  bio: ""
})

// Defining the Context Provider
const AuthProvider = (props)=>{
  const [bio, setBio] = useState("This is the default Bio")

  const updateBio = (newBio)=>{
    setBio(newBio)
  }

  return <AuthContext.Provider value={{
    username: "mareola",
    email: "bulun1001@gmail.com",
    bio: bio,
    updateBio
  }}>
    {props.children}
  </AuthContext.Provider>
}

// Defining a Component for Render
const ProfileCard = ()=>{
  const {username, email, bio, updateBio} = useContext(AuthContext)

  function handleClick(){
    updateBio("This is a New Bio")
  }

  return(
    <div>
      <p> UserName: {username}</p>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>

      <button onClick={handleClick}>Update Bio</button>
    </div>
  )
}



// Create root Component
const App = () => {
  return (
    <AuthProvider>
      <ProfileCard />
    </AuthProvider>
  )
}

export default App
