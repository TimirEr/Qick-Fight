import CompareResultView from "../views/compareResultView";
import { observer } from "mobx-react-lite";
import NavbarView from "../views/navBarView";
import { auth } from "../firebaseModel";
import { signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import CompareView from "../views/compareView";


import React, { useRef } from 'react';

export default observer(
    
    function Compare(props){


        function handleLoginACB(){
            console.log(props);

            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
              console.log("Sign In User: ")
              console.log(result)

              const user = result.user;
              props.props.UserState.user = user;
              props.props.UserState.loginStatus = true;
              console.log("LogIn successfully");
          
            }).catch((error) => {

            }); 
        }
