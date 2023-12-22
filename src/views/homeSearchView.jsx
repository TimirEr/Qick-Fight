import "/src/style.css"
import React from 'react'


export default 
function HomeSearchView(props){


    function textChangeHandlerACB(evt){
        props.changeText(evt.target.value);
    }

    function searchClickedHandlerACB(){
        props.searchClicked();
    }

    function resetFavoriteACB(){
        props.resetFavoriteFighter();
    }

    function resetACB(){
        props.resetSearch();
    }

    return(<div className="homeMenu">

        <div className="homeMenu_favo">
            <strong>Favorite:</strong><br />
            <div>{props.favoriteFighter}</div>
            <button onClick={resetFavoriteACB}> Clear </button>
            <br/>            
        </div>
    
    <div className="homeMenu_search">

        <div className="logo-container">
        <img src="src/assets/logo.png" alt="" className="logo"/>
        </div>
        
        <div className="searchBar">
        <input value={props.text} onChange={textChangeHandlerACB}></input>   
        <button onClick={searchClickedHandlerACB}>Search!</button>
        <button onClick={resetACB}>Reset</button>
        </div>
        
        </div>

    <div className="homeMenu_about">
        
    </div>
    </div>
);
}

 