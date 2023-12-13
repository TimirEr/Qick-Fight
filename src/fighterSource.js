//ALL SOM HAR MED ATT TA DATA FRÅN API KMR HÄR OCH SEDAN SKICKAS TILL MODEL.

import { BASE_URL, API_KEY } from "./apiConfig";

function retrieveFighterJSONACB(resp) {
    if (!resp.ok) {
        throw new Error("Invalid parameter");
    }
    return resp.json();
}
function getFighter(fighter) {
    const requestURL = BASE_URL + "api/mma/search/" + encodeURIComponent(fighter.query);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'mmaapi.p.rapidapi.com'
        }
    };
    return fetch(requestURL, options)
        .then(retrieveFighterJSONACB)
        ;
}

function getFighterDetails(id){
    return getFighter([id]).then(arrayToDataACB);
}

function arrayToDataACB(resp){
    return resp[0];
}


export {getFighter, getFighterDetails}






/* test */