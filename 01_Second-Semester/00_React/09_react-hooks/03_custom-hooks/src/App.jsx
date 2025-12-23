// Import Custom Hooks
import { use } from "react";
import { getData } from "./hooks/customHooks";



// Create root Component
const App = () => {
  const [data, mem] = getData("books")
  console.log(data)
  
  
  const [users, books] = mem
  console.log(users)
  console.log(books)
  return (
    <>

    </>
  );
};

export default App;
