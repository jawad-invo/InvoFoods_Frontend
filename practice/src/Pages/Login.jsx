import Axios from "axios";
import React, { useState } from "react";
import Input from "@material-ui/core/Input";

function Login() {
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const hitLogin = () => {
    Axios.post("http://127.0.0.1:8080/api/user/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <h1>Login</h1>
      <Input
        type="text"
        placeholder="Email"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      <button onClick={hitLogin}>Login</button>
    </>
  );
}

export default Login;
