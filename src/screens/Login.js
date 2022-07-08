import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../themes/login.css";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../services/firebase";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const [token, setToken] = useState();

  async function login() {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password).then((user) => {
        localStorage.setItem("accessToken", user.user.accessToken);
      });
    } catch (error) {
      alert(error);
    }
  }

  async function handleSubmit() {
    if (email && password) {
      login();
      if (location.state.fullname) {
        alert("Hello, " + location.state.fullname);
      } else {
        alert("Hello, " + email);
      }
      const accessToken = localStorage.getItem("accessToken").toString();
      navigate("/home", {
        state: {
          email: email,
          password: password,
          token: accessToken,
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
