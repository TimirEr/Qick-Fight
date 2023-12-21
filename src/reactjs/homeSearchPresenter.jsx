import HomeSearchView from "../views/homeSearchView";
import { observer } from "mobx-react-lite";
import ShowFighter from "../views/showresultView";
import RankingView from "../views/rankingView";
import NavbarView from "../views/navBarView";
import { auth } from "../firebaseModel";
import { signInWithPopup, GoogleAuthProvider,signOut} from "firebase/auth";


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

        function getRankingACB(){
            props.props.getRanking();
        }

        function getImageACB(){
            props.props.getImage();
        }


        function clickHandlerACB(dish){
            props.model.setCurrentDish(dish.id);
        }

        function setFavoriteFighterACB(fighter){
            console.log(fighter);
            props.props.setCurrentFavoriteFighter(fighter);
        }

        function handleLoginACB(){
            console.log(props);

            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
              console.log("Sign In User: ")
              console.log(result)

              const user = result.user;
              props.props.UserState.user = user;
              props.props.UserState.loginStatus = true;
              console.log("LogIn successfully");
          
            }).catch((error) => {

            }); 
        }

        function handleLogoutACB(){
            signOut(auth).then(() => {

                props.props.UserState.loginStatus = false;
                props.props.UserState.user = null;
                console.log("LogOut successfully");
        
              }).catch((error) => {
                console.error(error);
              });

        }

        function resetFavoriteFighterACB(){
            props.props.resetFavoriteFighter();
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
            <NavbarView 
            setLoginStatus = {handleLoginACB}   
            setLogoutStatus = {handleLogoutACB}       
            user = {props.props.UserState.user}
            loginStatus = {props.props.UserState.loginStatus}
        
        />
            </div>
        
        <div>
        <HomeSearchView 
        text={props.props.setSearchQuery.query} 
        changeText={changeTextInputACB} 
        searchClicked={searchFighterACB}        
        favoriteFighter = {props.props.currentFavoriteFighter}
        resetFavoriteFighter = {resetFavoriteFighterACB}
        //ranking = {getRankingACB}

        
        />
        
        </div> 
     {   <div>
      
       {props.props.searchResultsPromiseState.data && props.props.searchParams != null ? promiseNoData(props.props.searchResultsPromiseState)
       



       ||<ShowFighter searchResults = {props.props.searchResultsPromiseState.data} 
                      statsResults = {props.props.array4.data}
                      imageResults = {props.props.searchImagePromiseState.data}
                      testResult = {props.props.array4}
                      setFavoriteFighter = {setFavoriteFighterACB} 
                      onDishClic = {clickHandlerACB}
                      />   
                      : <RankingView  
                        defaultFighters = {props.props.defaultFighters}  
                        ranking = {getRankingACB} 
                        array1_1 = {props.props.array1[0].data}
                        //array1_2 = {props.props.array2[0].data}
                        array1_3 = {props.props.array3[0].data}

                        array2_1 = {props.props.array1[1].data}
                        //array2_2 = {props.props.array2[1].data}
                        array2_3 = {props.props.array3[1].data}

                        array3_1 = {props.props.array1[2].data}
                        //array3_2 = {props.props.array2[2].data}
                        array3_3 = {props.props.array3[2].data}
                        
                        array4_1 = {props.props.array1[3].data}
                        //array4_2 = {props.props.array2[3].data}
                        array4_3 = {props.props.array3[3].data}

                        array5_1 = {props.props.array1[4].data}
                        //array5_2 = {props.props.array2[4].data}
                        array5_3 = {props.props.array3[4].data}

                        array6_1 = {props.props.array1[5].data}
                        //array6_2 = {props.props.array2[5].data}
                        array6_3 = {props.props.array3[5].data}
                            />  
            }
      
        </div> }
      </div>
    );
        }
)

