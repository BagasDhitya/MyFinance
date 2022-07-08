import * as React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import Register from "./screens/Register";
import Login from "./screens/Login";
import Home from "./screens/Home";
import "./App.css";

import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </CookiesProvider>
  );
}

export default App;
