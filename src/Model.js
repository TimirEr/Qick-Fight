
import { getFighter, getFighterDetails, getFighterImage, getFighterStats, getStats, } from "./fighterSource";
import resolvePromise from "./resolvePromise";


export default {


    oflegends: "league",

    // Login Status
    UserState: {user: null, loginStatus: false},

    currentFighter: null,
    searchParams: {},

    currentFighterImagePromiseState: {},
    currentFighterStatsPromiseState: {},
    currentFighterPromiseState: {},
    currentFavoriteFighter: '---------',
    currentFavoriteFighterPromiseState: {},
    currentSearchPromise: {}, 

    searchResultsPromiseState: {},
    searchStatsPromiseState: {},
    searchImagePromiseState: {},

    // For Compare 
    secondFighter: null,
    searchParamsSecondFighter: {},
    searchResultsPromiseStateSecondFighter: {},
    searchStatsPromiseStateSecondFighter: {},
    secondFighterPromiseState: {},


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
    }
  },

  getFavoriteFighter(){
    return this.currentFavoriteFighter;
  },

  resetFavoriteFighter(){
    this.currentFavoriteFighter = '---------'
  },


  getRanking(){
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
  this.currentSearchPromise.error = false;
  this.currentSearchPromise.data = false;
  getFighter(this.searchParams).then(value => {
    this.array4 = new Array(value.results.length);
    console.log(this.array4);
  
    const promises = value.results.map((fighter, i) => {
      return new Promise((resolve, reject) => {
        this.array4[i] = fighter;
        
        getFighterImage(fighter.entity.id).then(image => {
          this.array4[i].imageData = image;
          
          getFighterStats(fighter.entity.id).then(stats => {
            this.array4[i].data = stats;
            console.log(this.array4[i]);
            resolve(); 
          }).catch(reject); 
        }).catch(reject); 
      });
    });
  
    Promise.all(promises)
      .then(() => {
        console.log("All API calls are done");
        this.currentSearchPromise.data = true;
        // Wait until all data is availible 
      })
      .catch(error => {
        console.error("Error fetching fighter data:", error);
        this.currentSearchPromise.error = true;
      });
      }).catch(error => {
        console.error("Error fetching fighters:", error);
        this.currentSearchPromise.error = true;
      });
},


 doSearchForRanking(searchParams) {
  this.searchParams = searchParams;
  for (let i = 0; i < 6; i++) {
    this.setSearchQuery(this.defaultFighters[i])

  resolvePromise(getFighter(this.searchParams), this.array1[i]);  

    getFighter(this.searchParams).then(value => {
      resolvePromise(getFighterImage(value.results[0].entity.id), this.array3[i]);
      }).catch("errors");  
    }
},



doSearchM(searchParams) {
  this.searchParams = searchParams;
  console.log("searchedWorked3:");
  console.log(searchParams);

  resolvePromise(getFighter(this.searchParams), this.searchResultsPromiseState);

  getFighter(this.searchParams).then(value => {
    resolvePromise(getFighterStats(value.results[0].entity.id), this.searchStatsPromiseState);
  }).catch(error => console.error("Error:", error));

},



setSecondFighter(id) {
  if (this.secondFighter !== id) {
    this.secondFighter = id;
    resolvePromise(getFighterDetails(id), this.secondFighterPromiseState);
    getFighterStats(id)
      .then(stats => {
        console.log("Second Fighter Stats:", stats);
      })
      .catch(error => console.error("Error fetching second fighter stats:", error));
  }
},

resetSearch(){
  this.array4 = null;
  this.currentSearchPromise = {};
},

doSearchSecondFighter(searchParamsSecondFighter) {
    this.searchParamsSecondFighter = searchParamsSecondFighter;
    console.log("searchedWorkedSecondFighter:");
    console.log(searchParamsSecondFighter);

    resolvePromise(getFighter(this.searchParamsSecondFighter), this.searchResultsPromiseStateSecondFighter);

    getFighter(searchParamsSecondFighter)
      .then(value => {
        console.log("Response for second fighter:", value); 
        if (value.results && value.results.length > 0 && value.results[0].entity) {
          resolvePromise(getFighterStats(value.results[0].entity.id), this.searchStatsPromiseStateSecondFighter);
        } else {
          console.error("Invalid response format for second fighter");
        }
      })
      .catch(error => console.error("Error fetching second fighter:", error));
  },

};
