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
            //props.props.getRanking();
        }

        function searchFighterRankACB(fighter){
            props.props.doSearchForRanking(fighter);
        }

       /* function getRankingACB(){
            props.props.setSearchQuery(props.props.defaultFighters[0]);
            console.log(props.props.searchParams)
            props.props.doSearch(props.props.searchParams)
            props.props.array1[0] = props.props.searchResultsPromiseState
            props.props.array1[1] = props.props.searchStatsPromiseState
            props.props.array1[2] = props.props.searchImagePromiseState
            console.log(props.props.array1)
            console.log(props.props.searchResultsPromiseState)
        }*/

        function getRankingACB(){
            props.props.getRanking();
            //searchFighterACB();
            //props.props.doSearch(props.props.searchParams);
            console.log(props.props.array1[0])
            console.log(props.props.array1[0]?.data)

        }


        function clickHandler(dish){
            //Show dish details
            props.model.setCurrentDish(dish.id);
        }

        function setFavoriteFighterACB(fighter){
            console.log(fighter);
            props.props.setCurrentFavoriteFighter(fighter);
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
        favoriteFighter = {props.props.currentFavoriteFighter}
        //ranking = {getRankingACB}

        
        />
        
        </div> 
     {   <div>
      
       {props.props.searchResultsPromiseState.data ? promiseNoData(props.props.searchResultsPromiseState)



       ||<ShowFighter searchResults = {props.props.searchResultsPromiseState.data} 
                      statsResults = {props.props.searchStatsPromiseState.data}
                      imageResults = {props.props.searchImagePromiseState.data}


                      setFavoriteFighter = {setFavoriteFighterACB} 
                      onDishClic = {clickHandler}
                      />   
                      : <RankingView  //Todo PromiseNoData missing
                        defaultFighters = {props.props.defaultFighters}   
                        searchFighter = {searchFighterRankACB} 
                        array1_1 = {props.props.array1[0].data}
                        array1_2 = {props.props.array2[0].data}
                        array1_3 = {props.props.array3[0].data}

                        array2_1 = {props.props.array1[1].data}
                        array2_2 = {props.props.array2[1].data}
                        array2_3 = {props.props.array3[1].data}

                        array3_1 = {props.props.array1[2].data}
                        array3_2 = {props.props.array2[2].data}
                        array3_3 = {props.props.array3[2].data}

                        ranking = {getRankingACB}
                            />  


            }
      
        </div> }

        {/*
      <div>
      <RankingView 
                defaultFighters = {props.props.defaultFighters}   
                searchFighter = {searchFighterRankACB} 
                ranking = {getRankingACB}
                />           
    </div>*/}
      </div>
    );
        }
)

