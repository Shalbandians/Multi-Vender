import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";

const App = () => {


  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
          </Routes>
     
    </BrowserRouter>
  );
};

export default App;
