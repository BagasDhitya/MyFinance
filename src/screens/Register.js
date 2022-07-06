import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../themes/register.css";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../services/firebase";

const Register = () => {
  let navigate = useNavigate();

  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState([]);

  async function register() {
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Successfully Register");
  }

  async function handleSubmit() {
    if (password.length <= 6) {
      alert("Password must contain at least 7 letters and 1 numeric");
    } else {
      register();
      navigate("login", { state: { fullname: fullname } });
    }
  }

  return (
    <FormInput
      logo={require("../assets/wallet_logo.png")}
      register={true}
      fullname={fullname}
      handleFullname={(e) => setFullname(e.target.value)}
      email={email}
      handleEmail={(e) => setEmail(e.target.value)}
      password={password}
      handlePassword={(e) => setPassword(e.target.value)}
      onClick={() => handleSubmit()}
    />
  );
};

export default Register;
