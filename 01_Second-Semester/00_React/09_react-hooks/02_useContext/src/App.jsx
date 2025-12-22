import { useState, createContext, useContext } from "react";

// Creating a Context
const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    name: "",
    username: "",
    email: "",
  },
  date: "",
  bio: "",
});

// Define Context Provider
const AuthProvider = (props) => {
  const [bio, setBio] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed!");

  const updateBio = (newBio) => {
    return setBio(newBio)
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: true,
        user: {
          name: "Mareola",
          username: "Ibukunola",
          email: "bulun1001@gmail.com",
        },
        date: "12, 12, 2025",
        bio: bio,
        updateBio
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// UserProfile Component
const UserProfile = () => {
  const { isAuthenticated, user, date } = useContext(AuthContext);

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <div>Username: {user.username}</div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Date: {date}</div>
      <div>Authenticated: {`${isAuthenticated}`}</div>

      <UserBio />
    </div>
  );
};

// User Bio Component
const UserBio = () => {
  const { bio, updateBio } = useContext(AuthContext)

  const updatesBio = (e)=>{
    e.preventDefault()
    updateBio("This is a new Bio")
  }

  return (
    <div>
      <h1>User Bio</h1>
      <div>{bio}</div>

      <button onClick={updatesBio}>Update Bio</button>
    </div>
  );
};

// Create root Component
const App = () => {
  return (
    <AuthProvider>
      <div className="container">
        <UserProfile />
      </div>
    </AuthProvider>
  );
};

export default App;
