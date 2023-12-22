import "/src/style.css"
import React from 'react'

import homeSearchPresenter from '../reactjs/homeSearchPresenter';

export default 
function CompareView(props){

    function textChangeHandlerACB(evt) {
        props.changeText(evt.target.value);
    }

    function searchClickedHandlerACB() {
        props.searchClicked();
    }

    function resetClickedHandlerACB(){
        props.resetClicked();
    }
    
    function addFighterToFavoriteACB(fighter){
      props.setFavoriteFighter(fighter.entity.name);
    }



   

    return(<div className = "compare">
        <div className="homeMenu_search">
         <div className="logo-container">
        <img src="src/assets/logo.png" alt="" className="logo" />
        </div> 

    <div className="searchBar">
        <input value={props.text} onChange={textChangeHandlerACB}></input>
        <button onClick={searchClickedHandlerACB}>Search</button>
        <button onClick={resetClickedHandlerACB}>Reset</button>
    </div>

    
</div>
    </div>
    );

}