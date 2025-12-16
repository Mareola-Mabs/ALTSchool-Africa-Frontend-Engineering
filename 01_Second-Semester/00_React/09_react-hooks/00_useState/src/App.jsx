import { useState } from "react";


// Create root Component
const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  const oldData = [20, 30, 40]

  // Working with Arrays
  const [data, setData] = useState(oldData)

  return(

    <div>
      <button onClick={() => setCount(count+1)} onMouseEnter={()=> setName("Ibk")}>Count: {count}, Name: {name}</button>
      <button onClick={()=> setData([...data, 500, 200])}>Set Array {data}, {oldData}</button>
    </div>

  )
};

export default App;
