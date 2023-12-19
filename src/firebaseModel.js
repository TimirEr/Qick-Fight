import {observable, reaction, configure} from "mobx";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import firebaseConfig from "/src/firebaseConfig";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import {reactive, watch} from "react"; 
//configure({ enforceActions: "never", });  // we don't use Mobx actions

// Add relevant imports here 

const PATH = "test2";
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

set(ref(db,PATH + "/qf"), "YES");

/*
function modelToPersistence(model){
    return({
        currentFavoriteFighter : model.Model.currentFavoriteFighter ? model.Model.currentFavoriteFighter : null
    })
}

function persistenceToModel(data, model){
    if(!data){
        model.Model.currentFavoriteFighter = null;
        return Promise.resolve(model);
    }

function modelPromiseACB(promiseData){
    model.Model.setCurrentFavoriteFighter(data.currentFavoriteFighter);
    
    model.ready = true;
    return model;
}
function errorACB(error){
    console.log(error);
}

return getFavoriteFighter(data.currentFavoriteFighter).then(modelPromiseACB).catch(errorACB);

}


function saveToFirebase(model){
}


function readFromFirebase(model){

}
function connectToFirebase(model, reactive){

}


export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase}

export default connectToFirebase; */