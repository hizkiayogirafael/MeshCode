import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
