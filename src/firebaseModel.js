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
    if(model.UserState.loginStatus && model.ready){
        set(ref(db,PATH + "/" + model.UserState.user.uid), modelToPersistence(model))
    }
}








function readFromFirebase(model){
    if(model.UserState.loginStatus){
        model.ready = false;


        onAuthStateChanged(auth, (user) => {

          console.log (user)

          if (user) {
            model.UserState.user = user;
            model.UserState.loginStatus = true;
            console.log ("Connecting To FB ")
            connectToFirebase(model, reaction)
          } else {
            console.log ("User logged out: ")
            model.UserState.user = null;
            model.UserState.loginStatus = false;
            model.currentFavoriteFighter = '---------';
          }
        });
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


function connectToFirebase(model, watchFuction){
   
  readFromFirebase(model).then(modelCheckerACB)

  function modelCheckerACB(){
      watchFuction(checkModelDataACB,saveModelToFireBaseACB)
  }
    // watchFunction(checkModelDataACB,saveModelToFireBaseACB)
  
  
  function checkModelDataACB(){
      return [model.favoriteFighter]
  }

  function saveModelToFireBaseACB() {
    saveToFirebase(model)
  }
}



export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase, auth}

export default connectToFirebase; 