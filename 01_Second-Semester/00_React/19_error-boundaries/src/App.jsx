// Import Route and Routes
import { Routes, Route } from "react-router-dom";
import "./assets/app.css";
import { Avatar } from "./components";
import { Component } from "react";

// Create a Home Page Component
const Home = () => {
  return (
    <section className="home__container">
      <Avatar />
    </section>
  );
};

// Error Causing Component
const ErrorComponent = () => {
  throw new Error("Something Happened");
};


// Fallback Component
const ErrorFallbackComponent = ()=>{
  return (
    <div>
      <h1>
        AN Error Occurred
      </h1>
    </div>
  )
}

// Error Boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so fallback UI shows
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallbackComponent />
    }

    return this.props.children;
  }
}

// Root Component
const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<ErrorComponent />}></Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
