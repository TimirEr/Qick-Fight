//EVERYTHING BACK-END MODEL GOES HERE (FUNC, CONSTS)

import {getFighter, getFighterDetails} from "./fighterSource"
import resolvePromise from "./resolvePromise";



export default {
    oflegends: "league",
    testing: "works",

  test(props){
    return(getFighter("mcgregor")
    .then(data => console.log(data))
    .catch(error => console.error(error)));
  }
//FUNCTIONS




}