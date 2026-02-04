import { Route, Routes } from "react-router-dom";
import PostDetail from "./PostDetail";
import "./App.css";
import { useEffect, lazy, Suspense } from "react";
import NotFound from "./Error";

const Home = lazy(()=> import('./Home'))


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetail />} />

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
};

export default App;
