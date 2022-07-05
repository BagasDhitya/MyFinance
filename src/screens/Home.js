import React from "react";
import { useLocation } from "react-router-dom";
import "../themes/home.css";

function Home() {
  const location = useLocation();

  return (
    <div>
      <h5>Hi, welcome back {location.state.email}!</h5>
      <h1>My Budget Planner</h1>
      <h3>Expenses</h3>
      <h3>Add Expenses</h3>
    </div>
  );
}

export default Home;
