import React, { useState } from "react";
import { auth, provider } from "../firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");

  const whenToLogIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setTheUser(user); // Assuming setTheUser is a function to set the user in your state
      })
      .catch((error) => {
        console.log("An error has occurred", error);
      });
  };

  return (
    <div className="logga in">
      <form onSubmit={whenToLogIn}>
        <h1>Log in!</h1>
        {/* Input fields for email and password are not needed for Google authentication */}
        {/* <input
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
        /> */}
        <button type="submit">Log in with Google</button>
      </form>
    </div>
  );
};

export default LogIn;
