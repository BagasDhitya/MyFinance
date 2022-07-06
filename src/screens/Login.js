import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../themes/login.css";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../services/firebase";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function login() {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
    }
  }

  async function handleSubmit() {
    if (email && password) {
      login();
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
