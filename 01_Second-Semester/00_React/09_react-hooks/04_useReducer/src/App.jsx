import "./assets/app.css";
import { useReducer, useState } from "react";

// Root Component
const App = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const [value, setValue] = useState(0)

  function reducer(state, action){
    switch(action.type){
      case "increment":
        return {count: state.count + 1}
      
      case "decrement":
        return {count: state.count - 1}

      case "reset":
        return {count: 0}

      case "set":
        return {count: action.payload}

      default:
        return state
        
    }
  }



  return (
    <div className="container">
      <div className="screen">{state.count}</div>

      <div className="buttons">
        <button onClick={()=> dispatch({type: 'increment'})}>Increase</button>
        <button onClick={()=> dispatch({type: 'decrement'})}>Decrease</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
      </div>

      <input type="number" value={value} onChange={(e)=> setValue(Number(e.target.value))}/>
      <button onClick={()=> dispatch({type: 'set', payload: value})}>Set</button>
    </div>
  );
};

export default App;
