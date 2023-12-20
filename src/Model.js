
import { getFighter, getFighterDetails, getFighterImage, getFighterStats, getStats, } from "./fighterSource";
import resolvePromise from "./resolvePromise";


export default {
    oflegends: "league",
    testing: "works",

    currentFighter: null,
    searchParams: {},

    searchResultsPromiseState: {},
    searchStatsPromiseState: {},
    searchImagePromiseState: {},

    currentFighterImagePromiseState: {},
    currentFighterStatsPromiseState: {},
    currentFighterPromiseState: {},
    currentFavoriteFighter: '---------',
    currentFavoriteFighterPromiseState: {},

    defaultFighters: ['islam makhachev' , 'leon edwards', 'alexandre pantoja', 'jon jones','alex pereira','sean strickland'],

    array1: [{},{},{},{},{},{}],
    array2: [{},{},{},{},{},{}],
    array3: [{},{},{},{},{},{}],

  testfunction(props){
    return(getFighter("mcgregor")
    .then(data => console.log(data))
    .catch(error => console.error(error)));
  },

  setCurrentFavoriteFighter(fighterId) {

    if (this.currentFavoriteFighter !== fighterId) {
      this.currentFavoriteFighter = fighterId;
      console.log('This fighter: ' + this.currentFavoriteFighter + ", is added to your favorite!");
    //TODO, like fetching additional details or saving to a database
  }
},

  getFavoriteFighter(){
    console.log(this.currentFavoriteFighter)
    return this.currentFavoriteFighter;
  },


  getRanking(){
    //this.setSearchQuery(this.defaultFighters)
    this.doSearchForRanking(this.searchParams)
  },



  setCurrentFighter(id) {
    if (this.currentFighter !== id) {
        this.currentFighter = id;
        resolvePromise(getFighterDetails(this.currentFighter), this.currentFighterPromiseState);
        resolvePromise(getFighterStats(id), this.currentFighterStatsPromiseState);
        resolvePromise(getFighterImage(id), this.currentFighterImagePromiseState);

  }
},

setSearchQuery(queryText) {
  this.searchParams.query = queryText;
},

 doSearch(searchParams) {
  this.searchParams = searchParams;
  console.log(searchParams);
  resolvePromise(getFighter(this.searchParams), this.searchResultsPromiseState);  

    
    getFighter(this.searchParams).then(
      value => {resolvePromise(getFighterStats(value.results[0].entity.id), this.searchStatsPromiseState);
    }).catch("errors");
  
  
    getFighter(this.searchParams).then(value => {
      resolvePromise(getFighterImage(value.results[0].entity.id), this.searchImagePromiseState);
      }).catch("errors");  
    
}, 




 doSearchForRanking(searchParams) {
  
  this.searchParams = searchParams;
 
  for (let i = 0; i < 6; i++) {
    this.setSearchQuery(this.defaultFighters[i])

  resolvePromise(getFighter(this.searchParams), this.array1[i]);  

    {/*getFighter(this.searchParams).then(value => {
    resolvePromise(getFighterStats(value.results[0].entity.id), this.array2[i]);
    }).catch("errors");*/}
  
    getFighter(this.searchParams).then(value => {
      resolvePromise(getFighterImage(value.results[0].entity.id), this.array3[i]);
      }).catch("errors");  
    
    }
},





};