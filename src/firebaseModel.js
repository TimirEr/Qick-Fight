import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get , onValue} from "firebase/database";
import firebaseConfig from "/src/firebaseConfig";
import {reaction} from "mobx";


import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

import Model from "./Model";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const PATH = "app";

//const rf = ref(db,PATH);



function modelToPersistence(model){
    console.log("checking modelToPersistence test!!!")
    console.log(model.currentFavoriteFighter)
  return({
        //favoriteFighter : model.currentFavoriteFighter,
        //searchResultsPromiseState: model.searchResultsPromiseState ? model.searchResultsPromiseState : null,
        favoriteFighter: model.currentFavoriteFighter ? model.currentFavoriteFighter : "",

    })
}



function persistenceToModel(data, model){
    if(!data){
      model.currentFavoriteFighter = '---------';
      return Promise.resolve(model);
    }

    function modelPromiseACB(){
      console.log("persistenceToModel: data" + data.favoriteFighter)
        model.setCurrentFavoriteFighter(data.favoriteFighter);
        //model.currentFavoriteFighter = data.favoriteFighter ? data.favoriteFighter : ""
        model.ready = true;
        return model;
    }

    modelPromiseACB();

}


function saveToFirebase(model){
    if(model.UserState.loginStatus && model.ready){
       // set(ref(db,PATH + "/" + model.UserState.user.uid), modelToPersistence(model))
       set(ref(db,PATH + "/" + model.UserState.user.uid), modelToPersistence(model))
    }
}




function readFromFirebase(model){
    if(model.UserState.loginStatus){
        model.ready = false;
    }

        return (
            get(ref(db,PATH + "/" + model.UserState.user.uid)).then(getDataACB).then(modelReadyACB)
          );
        
        function getDataACB(snapshot){
            return persistenceToModel(snapshot.val(), model);
        }

        function modelReadyACB(){
            model.ready = true;
        }   
}






const savedUserState = JSON.parse(localStorage.getItem('userState'));
if (savedUserState) {
    Model.UserState = savedUserState;
}

onAuthStateChanged(auth, (user) => {
    console.log("checking user in authStateChanged");
    console.log(user);

    if (user) {
        Model.UserState.user = user;
        Model.UserState.loginStatus = true;
        console.log("Connecting To FB");
        console.log(Model.currentFavoriteFighter);
        connectToFirebase(Model, reaction);

        // Update and save the new state to local storage
        localStorage.setItem('userState', JSON.stringify(Model.UserState));
    } else {
        console.log("User logged out: ");
        Model.UserState.user = null;
        Model.UserState.loginStatus = false;
        Model.currentFavoriteFighter = 'testForLogOut';
        console.log(Model.currentFavoriteFighter)


        // Update and save the new state to local storage
        localStorage.setItem('userState', JSON.stringify(Model.UserState));
    }
});






function connectToFirebase(model, watchFuction){
   
  readFromFirebase(model).then(modelCheckerACB)

  function modelCheckerACB(){
      watchFuction(checkModelDataACB,saveModelToFireBaseACB )
  }  
  
  function checkModelDataACB(){
    console.log("CHECK FOR currentFavoriteFighter ");
    console.log(model.currentFavoriteFighter)
      return [model.currentFavoriteFighter];
  }

  function saveModelToFireBaseACB() {
    if(model.ready){
        saveToFirebase(model)
    }
}
}





export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase, auth}

export default connectToFirebase;