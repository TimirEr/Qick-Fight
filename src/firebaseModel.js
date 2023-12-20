import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get , onValue} from "firebase/database";
import firebaseConfig from "/src/firebaseConfig";
import {reaction} from "mobx";
import Model from "./Model";

import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const PATH = "app";

function modelToPersistence(model){
    return({
        //favoriteFighter : model.currentFavoriteFighter,
        //searchResultsPromiseState: model.searchResultsPromiseState ? model.searchResultsPromiseState : null,
        favoriteFighter: model.favoriteFighter ? model.favoriteFighter : "",

    })
}



function persistenceToModel(data, model){
    if(!data){

      model.favoriteFighter = '---------';
      return Promise.resolve(model);

    }

    function modelPromiseACB(){
        model.favoriteFighter = data.favoriteFighter ? data.favoriteFighter : '---------';
        model.ready = true;
        return model;
    }


    modelPromiseACB();

}


function saveToFirebase(model){
    if(model.userState.loginStatus && model.ready){
        set(ref(db,PATH + "/" + model.userState.user.uid), modelToPersistence(model))
    }
}








function readFromFirebase(model){
    if(model.userState.loginStatus){
        onValue(ref(db,PATH + "/" + model.userState.user.uid), updateACB)
        model.ready = false;

        return (
            get(ref(db,PATH + "/" + model.userState.user.uid)).then(getDataACB).then(modelReadyACB)
          );
        
        function getDataACB(snapshot){
            return persistenceToModel(snapshot.val(), model);
        }

        function modelReadyACB(){
            model.ready = true;
        }

        function updateACB(snapshot){
            if(model.ready){
                return persistenceToModel(snapshot.val(),model)
            }
        }
    }
}


function connectToFirebase(model, watchFuction){
   
  readFromFirebase(model).then(modelCheckerACB)

  function modelCheckerACB(){
      watchFuction(checkModelDataACB,saveModelToFireBaseACB)
  }
    // watchFunction(checkModelDataACB,saveModelToFireBaseACB)
  
  
  function checkModelDataACB(){
      return [model.searchResultsPromiseState.promise, model.favoriteFighter]
  }

  function saveModelToFireBaseACB() {
    saveToFirebase(model)
  }
}


  onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log ("Connecting To FB ")
    connectToFirebase(Model, reaction)
  } else {
    console.log ("User logged out: ")
    model.userState.user = null;
    model.userState.loginStatus = false;
    model.currentFavoriteFighter = '---------';
  }
});


export function googleSignInOut (userState) {
    if(userState.loginStatus) {
      signOut(auth).then(() => {
      }).catch((err) => {
        console.error(err);
      });
    }

    if(!userState.loginStatus) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Sign In User: ")
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        userState.user = user;
        userState.loginStatus = true;
    
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }



      /*else{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
      })
      .catch((err) => {
        console.error(err);
      });
    }*/
  };








export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase}

export default connectToFirebase; 