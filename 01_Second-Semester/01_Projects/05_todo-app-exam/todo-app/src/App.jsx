import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./components/404";
import Signup from "./components/Signup";
import Login from "./components/Login";

const Home = lazy(()=> import('./components/Home'))



const App = ()=>{


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  )
}

export default App
