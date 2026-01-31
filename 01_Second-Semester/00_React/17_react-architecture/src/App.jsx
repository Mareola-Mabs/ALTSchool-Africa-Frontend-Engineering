// Import Route and Routes
import { Routes, Route } from "react-router-dom";
import "./assets/app.css";
import { Avatar } from "./components";

// Create a Home Page Component
const Home = () => {
  return (
    <section className="home__container">
      <Avatar />
    </section>
  );
};

// Root Component
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
