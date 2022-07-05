import React from "react";
import { useLocation } from "react-router-dom";
import "../themes/home.css";

function Home() {
  const location = useLocation();

  return (
    <div>
      <h5>Hi, welcome back {location.state.email}</h5>
    </div>
  );
}

export default Home;
