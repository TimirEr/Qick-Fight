
import { getFighter, getFighterDetails, getFighterImage, getFighterStats, getStats, } from "./fighterSource";
import resolvePromise from "./resolvePromise";


export default {

  
    oflegends: "league",
    testing: "works",

    UserState: {user: null, loginStatus: false},

    currentFighter: null,
    searchParams: {},

    searchResultsPromiseState: {},
    searchStatsPromiseState: {},
    searchImagePromiseState: {},

    currentFighterImagePromiseState: {},
    currentFighterStatsPromiseState: {},
    currentFighterPromiseState: {},
    currentFavoriteFighter: '---------',
    //currentFavoriteFighter: [],
    currentFavoriteFighterPromiseState: {},

    defaultFighters: ['islam makhachev' , 'leon edwards', 'alexandre pantoja', 'jon jones','alex pereira','sean strickland'],

    array1: [{},{},{},{},{},{}],
    array2: [{},{},{},{},{},{}],
    array3: [{},{},{},{},{},{}],

    array4: [{},{}],

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
    return this.currentFavoriteFighter;
  },

  resetFavoriteFighter(){
    this.currentFavoriteFighter = '---------'
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

 doSearch1(searchParams) {
  this.searchParams = searchParams;
  resolvePromise(getFighter(this.searchParams), this.searchResultsPromiseState);  

    
    getFighter(this.searchParams).then(
      value => {resolvePromise(getFighterStats(value.results[0].entity.id), this.searchStatsPromiseState);   
      }).catch("errors");
  
  
    getFighter(this.searchParams).then(value => {
      resolvePromise(getFighterImage(value.results[0].entity.id), this.searchImagePromiseState);
      }).catch("errors");  
    
}, 

doSearch(searchParams) {
  this.searchParams = searchParams;
  resolvePromise(getFighter(this.searchParams), this.searchResultsPromiseState);  

    
    getFighter(this.searchParams).then(
      value => {
        this.array4 = new Array(value.results.length);
        for(let i = 0; i < value.results.length; i++){
        this.array4[i] = value.results[i]
        resolvePromise(getFighterStats(value.results[i].entity.id), this.array4[i]);
      }
      }).then(() => {console.log(this.array4[0])}).catch("errors");
  
  
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