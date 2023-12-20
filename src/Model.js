
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


   /*     McGregor
    searchRanking1PromiseState: {},
    searchRanking2PromiseState: {},
    searchRanking3PromiseState: {},

        Yadong
    searchRanking1PromiseState: {},
    searchRanking2PromiseState: {},
    searchRanking3PromiseState: {},

        Jingliang
    searchRanking1PromiseState: {},
    searchRanking2PromiseState: {},
    searchRanking3PromiseState: {},*/


    array1: [{},{},{},{},{},{}],
    array2: [{},{},{},{},{},{}],
    array3: [{},{},{},{},{},{}],



    hasSearched: false,


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
      
      this.setSearchQuery(this.defaultFighters)
      this.doSearchForRanking(this.searchParams)

      //this.array1[0] = this.searchResultsPromiseState;
      //this.array1[1] = this.searchStatsPromiseState;
      //this.array1[2] = this.searchImagePromiseState;

      /*this.setSearchQuery(this.defaultFighters[1])
      this.doSearch(this.searchParams)

      this.array2[0] = this.searchResultsPromiseState;
      this.array2[1] = this.searchStatsPromiseState;
      this.array2[2] = this.searchImagePromiseState;

      this.setSearchQuery(this.defaultFighters[2])
      this.doSearch(this.searchParams)

      this.array3[0] = this.searchResultsPromiseState;
      this.array3[1] = this.searchStatsPromiseState;
      this.array3[2] = this.searchImagePromiseState;


      //this.doSearch(this.searchParams);
      //this.array1[0] = this.searchResultsPromiseState;
      //this.array1[1] = this.searchStatsPromiseState;
      //this.array1[2] = this.searchImagePromiseState;*/
    
    },



  setCurrentFighter(id) {
    if (this.currentFighter !== id) {
        this.currentFighter = id;
        resolvePromise(getFighterDetails(this.currentFighter), this.currentFighterPromiseState);
        resolvePromise(getFighterStats(id), this.currentFighterStatsPromiseState);
        resolvePromise(getFighterImage(id), this.currentFighterImagePromiseState);

        /*
      getFighterStats(id)
      .then(stats => {
          console.log("Fighter Stats:", stats);
        })
        .catch(error => console.error("Error fetching stats:", error));


      getFighterImage(id)
      .then(image => {
          console.log("Fighter Image:", image);
      })
      .catch(error => console.error("Error fetching image:", error));
  
*/

  }
},

setSearchQuery(queryText) {
  this.searchParams.query = queryText;
},


doSearch(searchParams) {
  this.searchParams = searchParams;
  console.log(searchParams);
  resolvePromise(getFighter(this.searchParams), this.searchResultsPromiseState);  


    getFighter(this.searchParams).then(value => {
    resolvePromise(getFighterStats(value.results[0].entity.id), this.searchStatsPromiseState);
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