//EVERYTHING BACK-END MODEL GOES HERE (FUNC, CONSTS)

import {getFighter, getFighterDetails} from "./fighterSource"
import resolvePromise from "./resolvePromise";



export default {
    oflegends: "league",
    testing: "works",


    currentFighter: null,
    searchParams: {}, 
    searchResultsPromiseState: {},
    currentFighterPromiseState: {}, 



  testfunction(props){
    return(getFighter("mcgregor")
    .then(data => console.log(data))
    .catch(error => console.error(error)));
  },


    setCurrentFighter(id){
      if(this.currentFighter != id){
        this.currentFighter=id;
        resolvePromise(getFighterDetails(this.currentFighter), this.currentFighterPromiseState);
      }
    },

    setSearchQuery(queryText){
      this.searchParams.query = queryText;
    },

    doSearch(searchParams){
      this.searchParams = searchParams;
      console.log("searchedWorked3:");
      console.log(searchParams);
      resolvePromise(getFighter(this.searchParams), this.searchResultsPromiseState);
    }

  
//FUNCTIONS




}