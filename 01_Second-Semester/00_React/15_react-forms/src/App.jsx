import { useState } from "react";

// Form Controls


// Root Component
function App() {
  const [name, setName] = useState('')
  const [checked, setChecked] = useState(false)

  // To handle text inputs
  function handleInput(e){
    e.preventDefault() // not needed
    setName(e.target.value)
    console.log(name)
  }

  // To handle checkboxes
  function handleCheckbox(e){
    setChecked(e.target.checked)
    console.log(checked)
  }


  return (
   <form action="">
     <input type="text" name="name" id="name" value={name} placeholder="Enter Your Name" onChange={handleInput} />
     
     <input type="checkbox" name="featured" checked={checked} onChange={handleCheckbox} id="" />
   </form>
    
  );
}

export default App;
