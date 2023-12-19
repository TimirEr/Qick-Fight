import { getFighter, getFighterDetails, getFighterImage, getFighterStats, getStats } from "./fighterSource";
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


    testfunction(props) {
        return (getFighter("mcgregor")
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

    getFavoriteFighter() {
        console.log(this.currentFavoriteFighter)
        return this.currentFavoriteFighter;
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
        console.log("searchedWorked3:");
        console.log(searchParams);

        resolvePromise(getFighter(this.searchParams), this.searchResultsPromiseState);

        getFighter(this.searchParams).then(value => {
            resolvePromise(getFighterStats(value.results[0].entity.id), this.searchStatsPromiseState);
        }).catch("errors");

        getFighter(this.searchParams).then(value => {
            resolvePromise(getFighterImage(value.results[0].entity.id), this.searchImagePromiseState);
        }).catch("errors");

    },


};