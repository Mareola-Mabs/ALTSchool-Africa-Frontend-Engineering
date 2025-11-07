import { useState } from "react"

// Loader Component
const Loader = () => {
  return <div className="loader">Loading...</div>;
};

// Content Component
const Content = () => {
  return (
    <div className="content">
      <p>
        React is a popular JavaScript library for building user interfaces,
        developed by Facebook. It allows developers to create reusable UI
        components, making code more maintainable and modular. Unlike
        traditional web applications, React uses a virtual DOM to update only
        the parts of the page that change, improving performance. It supports
        single-page applications, enabling smooth navigation without full page
        reloads. React’s component-based architecture encourages separation of
        concerns, making development scalable for large projects. Developers can
        manage state within components using hooks like useState and useEffect.
        React also integrates easily with other libraries and frameworks,
        providing flexibility for complex applications. Its ecosystem includes
        tools like React Router for navigation and Redux for state management.
        JSX, a syntax extension used in React, allows writing HTML-like code
        inside JavaScript. Overall, React has become one of the most widely
        adopted frameworks for modern web development.
      </p>
    </div>
  );
};


const Container = ()=>{
    const [counter, setCounter] = useState(true)

    setTimeout(()=>{
        setCounter(false)
    }, 5000)

    return <section>{counter? <Loader/> : <Content/>}</section>
}

export default Container

