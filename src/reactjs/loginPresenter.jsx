import React, { useState } from "react";
import { auth, provider } from "../firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";

const LogIn = () => {
  const [user, setTheUser] = useState("");


  // checks when to login , this was not allowed to do in the view since the mvp model should be followed and no logic is allowed in the view only things that are relevant for the user
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
