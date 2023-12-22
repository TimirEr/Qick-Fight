

/////  CODE FROM TW

import "/src/firebaseModel.js";

import model from "./Model.js";
import {createRoot} from "react-dom/client";
import ReactRoot from "./reactjs/ReactRoot.jsx";
import { auth } from "./firebaseModel.js";
import connectToFirebase from "./firebaseModel.js";

import { observable, configure, reaction } from "mobx";
configure({ enforceActions: "never", });  

import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

import {createElement} from "react";

window.React= {createElement:createElement};        

const reactiveModel = observable(model);

createRoot(document.getElementById('root'))
    .render(<ReactRoot model={reactiveModel}/>);


    onAuthStateChanged(auth, (user) => {
        console.log("checking user in authStateChanged");
        console.log(user);
    
        if (user) {
    
          reactiveModel.UserState.user = user;
          reactiveModel.UserState.loginStatus = true;
            console.log("Connecting To FB");
            console.log(reactiveModel.currentFavoriteFighter);
            connectToFirebase(reactiveModel, reaction);
    
        } else {
            console.log("User logged out: ");
            reactiveModel.UserState.user = null;
            reactiveModel.UserState.loginStatus = false;
            reactiveModel.currentFavoriteFighter = '---------',
            console.log(reactiveModel.currentFavoriteFighter)
        }
    });

