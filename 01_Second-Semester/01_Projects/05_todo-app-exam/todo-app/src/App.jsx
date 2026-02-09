import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./components/404";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { isAuthenticated } from "./components/Auth";

const Dashboard = lazy(()=> import('./components/Dashboard'))

import { Navigate } from "react-router-dom";

const AuthDashboard = () => {

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <Dashboard />;
};


const App = ()=>{


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<AuthDashboard />} />

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  )
}

export default App
