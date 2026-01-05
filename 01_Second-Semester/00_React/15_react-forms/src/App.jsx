import { useState } from "react";

// Form Controls


// Root Component
function App() {
  const [name, setName] = useState('')
  const [checked, setChecked] = useState(false)
  const [gender, setGender] = useState()
  const [fruit, setFruit] = useState('')

  // To handle text inputs
  function handleInput(e){
    e.preventDefault() // not needed
    setName(e.target.value)
    console.log(e.target.value)
  }

  // To handle checkboxes
  function handleCheckbox(e){
    setChecked(e.target.checked)
    console.log(e.target.checked)
  }

  // To handle radio buttons
  function handleRadio(e){
    setGender(e.target.value)
    console.log(e.target.value)
    console.log(e.target.checked)
  }

  // To handle select buttons
  function handleSelect(e){
    setFruit(e.target.value)
    console.log(e.target.value)
  }


  return (
   <form action="" style={{display: "flex", flexDirection: "column", width: "500px"}}>
     <input type="text" name="name" id="name" value={name} placeholder="Enter Your Name" onChange={handleInput} />
     
     <input type="checkbox" name="featured" checked={checked} onChange={handleCheckbox} id="" />

     <label htmlFor="male">Male
      <input type="radio" name="gender" value="male" id="male" checked={gender === 'male'} onChange={handleRadio} />
     </label>
     <label htmlFor="female">Female
      <input type="radio" name="gender" value="female" id="female" checked={gender === 'female'} onChange={handleRadio} />
     </label>

     <select name="" value={fruit} onChange={handleSelect}>
      <option value="" disabled="disabled">Select a fruit</option>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
     </select>
   </form>
    
  );
}

export default App;
