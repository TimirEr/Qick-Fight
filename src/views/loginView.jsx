import React, { useState } from "react";
import { auth } from "../firebaseConfig.js";
import { signInWithEmailAndPassword} from "firebase/auth";


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const whenToLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        console.log(userInfo);
      })
      .catch((error) => {
        console.error(error); // Log the error
      });
  };

  return (
    <div className="logga in">
      <form onSubmit={whenToLogIn}>
        <h1>Log in!</h1>
        <input
          type="email"
          placeholder="Please enter your email!"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Please enter password!"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in!</button>
      </form>
    </div>
  );
};

export default LogIn;