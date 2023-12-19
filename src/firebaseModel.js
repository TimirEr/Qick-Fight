import { reactive, watch } from "react";
//configure({ enforceActions: "never", });  // we don't use Mobx actions


// Add relevant imports here 


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

set(ref(db, PATH + "/qf"), "YES");


function modelToPersistence(model) {
    return ({
        currentFavoriteFighter: model.Model.currentFavoriteFighter ? model.Model.currentFavoriteFighter : null
    })
}

function persistenceToModel(data, model) {
    if (!data) {
        model.Model.currentFavoriteFighter = null;
        return Promise.resolve(model);
    }

    function modelPromiseACB(promiseData) {
        model.Model.setCurrentFavoriteFighter(data.currentFavoriteFighter);

        model.ready = true;
        return model;
    }



    export default connectToFirebase;
}