import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../themes/login.css";

const Login = () => {
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
      login={true}
      email={email}
      handleEmail={(e) => setEmail(e.target.value)}
      password={password}
      handlePassword={(e) => setPassword(e.target.value)}
      onClick={() => handleSubmit()}
    />
  );
};

export default Login;
