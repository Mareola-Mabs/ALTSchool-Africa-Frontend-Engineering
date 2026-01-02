import { useState } from "react";

const Child = ({ count, setCount }) => {
  // Both the count and setCount props were lifted from the App component

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Click Me</button>
    </div>
  );
};
const ChildOne = ({ count, setCount }) => {
  // Both the count and setCount props were lifted from the App component

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Click Me</button>
    </div>
  );
};

// Root Component
function App() {
  const [count, setCount] = useState(0);

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // const [fullName, setFullName] = useState(firstName + ' ' + lastName) // Wrong usage

  const fullName = firstName + ' ' + lastName // Correct

  return (
    <div>
      <Child count={count} setCount={setCount} /> {/* State Lifting */}
      <ChildOne count={count} setCount={setCount} /> {/* State Lifting*/}
    </div>
  );
}

export default App;
