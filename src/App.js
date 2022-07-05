import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
