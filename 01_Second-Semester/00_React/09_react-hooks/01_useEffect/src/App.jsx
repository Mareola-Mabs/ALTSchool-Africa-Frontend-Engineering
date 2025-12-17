import { useState, useEffect } from "react";


// Create root Component
const App = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count + 1)
    }, 1000)

    return()=> clearTimeout()
  }, [count])

    count%2 === 0? console.log("It is even"): console.log("It is odd")


  return(

    <div>
      
    </div>

  )
};

export default App;
