import CompareResultView from "../views/compareResultView";
import { observer } from "mobx-react-lite";
import NavbarView from "../views/navBarView";
import { auth } from "../firebaseModel";
import { signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import CompareView from "../views/compareView";


import React, { useRef } from 'react';

export default observer(
    
    function Compare(props){


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

        const [secondFighter, setSecondFighter] = React.useState(null);
        const firstSearchPerformedRef = useRef(false);
        const secondSearchPerformedRef = useRef(false);
      
        function changeTextInputACB(text) {
          props.props.setSearchQuery(text);
        }
      
        function searchFighterACB() {
      
          if (!firstSearchPerformedRef.current) {
            props.props.doSearchM(props.props.searchParams);
      
            firstSearchPerformedRef.current = true;
      
            console.log('First search performed:', firstSearchPerformedRef.current);
          } else {
            props.props.doSearchSecondFighter(props.props.searchParamsSecondFighter);
      
            props.props.doSearchSecondFighter(props.props.searchParams);
            secondSearchPerformedRef.current = true;
          }
        }
      
        function clickHandler(dish) {
          props.model.setCurrentFighter(dish.id);
          if (props.props.currentFighter && !secondFighter) {
            props.model.setSecondFighter(dish.id);
          }
        }
      
        function resetClickedHandlerACB() {
            props.props.currentFighter = null;
            setSecondFighter(null);
            firstSearchPerformedRef.current = false; 
            props.props.searchResultsPromiseState = {};
            props.props.searchStatsPromiseState = {};
            props.props.searchResultsPromiseStateSecondFighter ={};
            props.props.searchStatsPromiseStateSecondFighter = {};
          }
          


    return (<div>
        <div>
        <NavbarView 
            user = {props.props.UserState.user}
            loginStatus = {props.props.UserState.loginStatus}
            setLoginStatus = {handleLoginACB}   
            setLogoutStatus = {handleLogoutACB}         
        />
        </div>
        <div>

    <CompareView
        changeText={changeTextInputACB}
        searchClicked={searchFighterACB}
        resetClicked={resetClickedHandlerACB}
      />
       </div>
<div className="compare_versus">


      <div className="compare_versus_fighter1">
        <CompareResultView
          searchResults={props.props?.searchResultsPromiseState.data}
          statsResults={props.props?.searchStatsPromiseState.data}
          onDishClick={clickHandler}
        />
        </div>
        <div  className="compare_versus_vs">
            <h2> VS </h2>
        </div>
           

        
        <div className="compare_versus_fighter2">
            
        
        { secondSearchPerformedRef && (
          <CompareResultView
            searchResults={props.props?.searchResultsPromiseStateSecondFighter.data}
            statsResults={props.props?.searchStatsPromiseStateSecondFighter.data}
            onDishClick={clickHandler}
          />
        )}
        </div >
        </div>
      </div>

        

    );
})
