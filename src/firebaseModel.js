import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get , onValue} from "firebase/database";
import firebaseConfig from "/src/firebaseConfig";

import { observable, configure, reaction } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions

import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

//import Model from "./Model";

//const reactiveModel = observable(Model);


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
  //data = null;
  console.log("persistenceToModel: " , data)
    if(!data){
      model.currentFavoriteFighter = '---------',
      model.ready = true; 
      console.log(Promise.resolve(model))
      return Promise.resolve(model);

      //Todo I AM HERE!!!
    }

    function modelPromiseACB(){
      console.log("persistenceToModel: data " + data.favoriteFighter)
        model.currentFavoriteFighter = data.favoriteFighter;
        //model.currentFavoriteFighter = data.favoriteFighter ? data.favoriteFighter : ""
        model.ready = true;
        return model;
    }

    modelPromiseACB();

}


function saveToFirebase(model){
  console.log("saveToFirebase")
    if(model.UserState.loginStatus && model.ready){
       // set(ref(db,PATH + "/" + model.UserState.user.uid), modelToPersistence(model))
       set(ref(db,PATH + "/" + model.UserState.user.uid), modelToPersistence(model))
    }
}




function readFromFirebase(model){

  console.log("readFromFirebase: loginStatus: " , model.UserState.loginStatus)
    if(model.UserState.loginStatus){
        model.ready = false;
    }
    console.log("readFromFirebase: " , model.ready)
    console.log("db: " , db)
    console.log("path: " , PATH)
    console.log("uid: " , model.UserState.user.uid)
        console.log("get: " , ref(db,PATH + "/" + model.UserState.user.uid))
      return (
            get(ref(db,PATH + "/" + model.UserState.user.uid)).then(getDataACB).then(modelReadyACB)
          );
        
        function getDataACB(snapshot){
          console.log(" getDataACB (snapShot):  " , snapshot.val())
            return persistenceToModel(snapshot.val(), model);
        }

        function modelReadyACB(){
            model.ready = true;
        }   
}






/*
const savedUserState = JSON.parse(localStorage.getItem('userState'));
if (savedUserState) {
    Model.UserState = savedUserState;
}

onAuthStateChanged(auth, (user) => {
    console.log("checking user in authStateChanged");
    console.log(user);

    if (user) {

      reactiveModel.UserState.user = user;
      reactiveModel.UserState.loginStatus = true;
        console.log("Connecting To FB");
        console.log(reactiveModel.currentFavoriteFighter);
        connectToFirebase(reactiveModel, reaction);


        // Update and save the new state to local storage
        localStorage.setItem('userState', JSON.stringify(reactiveModel.UserState));
    } else {
        console.log("User logged out: ");
        reactiveModel.UserState.user = null;
        reactiveModel.UserState.loginStatus = false;
        reactiveModel.currentFavoriteFighter = 'testForLogOut';
        console.log(reactiveModel.currentFavoriteFighter)


        // Update and save the new state to local storage
        localStorage.setItem('userState', JSON.stringify(reactiveModel.UserState));
    }
});


*/




function connectToFirebase(model, watchFuction){

  console.log("connectToFirebase model" , model)
   
  readFromFirebase(model).then(modelCheckerACB)

  function modelCheckerACB(){
    console.log("modelCheckerACB")
      watchFuction(checkModelDataACB,saveModelToFireBaseACB)
  }  
  
  function checkModelDataACB(){
    console.log("CHECK FOR currentFavoriteFighter ");
    console.log(model.currentFavoriteFighter)
    console.log(model.ready)
      return [model.currentFavoriteFighter];
  }

  function saveModelToFireBaseACB() {
    if(model.ready){
      console.log("save now!!!")
        saveToFirebase(model)
    }
    console.log("NO SAVE!!!")
}
}





export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase, auth}

export default connectToFirebase;