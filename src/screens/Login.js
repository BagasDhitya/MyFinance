import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import FormInput from "../components/formInput";
import "../themes/login.css";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function handleSubmit() {
    if (email && password) {
      alert("Hello, " + email);
      navigate("home", {
        state: {
          email: email,
          password: password,
        },
      });
    } else {
      alert("Please fill in the blank");
    }
  }

  return (
    <FormInput
      email={email}
      handleEmail={(e) => setEmail(e.target.value)}
      password={password}
      handlePassword={(e) => setPassword(e.target.value)}
      onClick={() => handleSubmit()}
    />
  );
}

export default Login;
