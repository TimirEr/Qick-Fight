import {observable, reaction, configure} from "mobx";
import { initializeApp } from 'firebase/app';
//import { getDatabase, ref, get, set} from "firebase/database";
import firebaseConfig from "/src/firebaseConfig.js";
import {reactive, watch} from "react"; 
configure({ enforceActions: "never", });  // we don't use Mobx actions


const PATH = "quickfight";


// Add relevant imports here 



const app= initializeApp(firebaseConfig);
const db= getDatabase(app);
//const rf = ref(db,PATH);

set(ref(db,PATH + "/test"), "dummy");

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

export default connectToFirebase;*/