import React, { useState } from "react";
import { auth, provider } from "../firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";

const LogIn = () => {
  const [user, setTheUser] = useState("");

  const whenToLogIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        
        setU(user); 
      })
      .catch((error) => {
        console.log("An error has occurred", error);
      });
  };

  return (
    <div className="logga in">
      <form onSubmit={whenToLogIn}>
        <h1>Log in!</h1>
        <button type="submit">Log in with Google</button>
      </form>
    </div>
  );
};

export default LogIn;