import { useState } from "react";

// Form Controls


// Root Component
function App() {
  const [name, setName] = useState('')

  function handleChange(e){
    setName(e.target.value)
    console.log(name)
  }


  return (
   <form action="">
     <input type="text" name="name" id="name" value={name} placeholder="Enter Your Name" onChange={handleChange} />
   </form>
    
  );
}

export default App;
