import HomeSearchView from "../views/homeSearchView";
import { observer } from "mobx-react-lite";
import ShowFighter from "../views/showresultView";
import RankingView from "../views/rankingView";
import NavbarView from "../views/navBarView";



export default observer(

    function HomeSearch(props){

       
        function changeTextInputACB(text){
            //Store new text in model
            props.props.setSearchQuery(text);
        }

        function searchFighterACB(){
            //Retrieve the dishes that fulfill the criteria.
            props.props.doSearch(props.props.searchParams);
        }

        function searchFavoriteFighterACB(){
            console.log(props.props.currentFavoriteFighter);
            return (props.props.currentFavoriteFighter);
            //props.model.searchFavoriteFighter();
        }

        function clickHandler(dish){
            //Show dish details
            props.model.setCurrentDish(dish.id);
        }

    function promiseNoData(promiseState){
        if(promiseState.promise){
            if (promiseState.data && !promiseState.error){
                return false;
            }

            if(promiseState.error){
                return <div>{promiseState.error}</div>
            }

            if(!promiseState.data && !promiseState.error){
                return <img src={"https://brfenergi.se/iprog/loading.gif"} alt= "Loading"/>
            }
        }
        return <div>no data</div>;
    }

    return (
        <div>
            <div>
                <NavbarView></NavbarView>
            </div>
        <div>
        <HomeSearchView 
        text={props.props.setSearchQuery.query} 
        changeText={changeTextInputACB} 
        searchClicked={searchFighterACB}
        searchFavoriteFighter = {searchFavoriteFighterACB}
        favoriteFighter = {props.props.currentFavoriteFighter}
        />
        
        </div> 
        <div>
      
       {props.props.searchResultsPromiseState.data ? promiseNoData(props.props.searchResultsPromiseState)
       ||<ShowFighter searchResults = {props.props.searchResultsPromiseState.data} 
                      statsResults = {props.props.searchStatsPromiseState.data} 
                      onDishClic = {clickHandler}
                      />  
                      : <RankingView></RankingView>}
      
      </div> 
      </div>
    );
        }
)

