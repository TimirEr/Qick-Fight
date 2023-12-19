import React from "react";
import { useState } from "react";
import { auth } from "../firebaseConfig.js";

import { createUserWithEmailAndPassword } from "firebase/auth";

const signUp  = () => {

    const [email , setEmail] = useState ("");
    const [password , setPassword] = useState ("");



    const whenToSignUp  = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth , email , password )
        .then((userInfo) => {
            console.log(userInfo)
        }).catch (error )
        console.log(error)
        }

    return(


        <div  className = "skapa ett konto ">
        <form onSubmit={whenToSignUp}>
        

    <h1>Log in!</h1> 
    <input type="email" placeholder="please enter your email!" value={email} onChange={(e)=> setEmail (e.setEmail)}>  </input>
    <input type="password" placeholder="please enter password!" value={password}  onChange={(e)=> setPassword (e.setPassword)}> </input>

    <button type="enter"> sign up!</button>
      


        </form>
        </div>
        
    )
}

export default signUp;