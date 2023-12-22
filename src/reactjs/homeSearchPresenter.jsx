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
            props.props.setSearchQuery(text);
        }

        function resetSearchACB(){
            props.props.resetSearch();
        }

        function searchFighterACB(){
            props.props.doSearch(props.props.searchParams);
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
              console.log(props.pros.currentFavoriteFighter)
          
            }).catch((error) => {

            }); 
        }

        function handleLogoutACB(){
            signOut(auth).then(() => {

                props.props.UserState.loginStatus = false;
                props.props.UserState.user = null;
                console.log("LogOut successfully");
                console.log(props.props.currentFavoriteFighter)

        
              }).catch((error) => {
                console.error(error);
              });

        }

        function resetFavoriteFighterACB(){
            props.props.resetFavoriteFighter();
        }

        function promiseNoData(promiseState){
            console.log("PROMISESTATE:");
            console.log(promiseState);
            if(promiseState){
                if (promiseState.data && !promiseState.error){
                    console.log("IT WORKED");
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
        resetSearch = {resetSearchACB}
        
        />
        
        </div> 
     {   <div>
      
       {props.props.currentSearchPromise.data == true ? promiseNoData(props.props.currentSearchPromise)
       



       ||<ShowFighter 
                      testResult = {props.props.array4}
                      setFavoriteFighter = {setFavoriteFighterACB} 
                      onDishClic = {clickHandlerACB}
                      />  
                      : <RankingView  
                        defaultFighters = {props.props.defaultFighters}  
                        ranking = {getRankingACB} 
                        array1_1 = {props.props.array1[0].data}
                        array1_3 = {props.props.array3[0].data}

                        array2_1 = {props.props.array1[1].data}
                        array2_3 = {props.props.array3[1].data}

                        array3_1 = {props.props.array1[2].data}
                        array3_3 = {props.props.array3[2].data}
                        
                        array4_1 = {props.props.array1[3].data}
                        array4_3 = {props.props.array3[3].data}

                        array5_1 = {props.props.array1[4].data}
                        array5_3 = {props.props.array3[4].data}

                        array6_1 = {props.props.array1[5].data}
                        array6_3 = {props.props.array3[5].data}
                            />  
            }
      
        </div> }
      </div>
    );
        }
)

