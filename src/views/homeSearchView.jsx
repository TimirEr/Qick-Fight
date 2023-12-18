import "/src/style.css"
import React from 'react'
import Model from "../Model";


export default 
function HomeSearchView(props){

    
    function handleHomeACB(){
        window.location.hash="/";
    }

    function textChangeHandlerACB(evt){
        props.changeText(evt.target.value);
    }

    function searchClickedHandlerACB(){
        props.searchClicked();
    }

    function searchFavoriteACB(){
        props.searchFavoriteFighter();
    }

    function checkFavoriteACB(){
        return props.searchFavoriteFighter;
    }



    return(<div className="homeMenu">
        <div className="homeMenu_favo">
            <strong>Favorite:</strong><br />
            <div>{Model.currentFavoriteFighter} </div>
            <button onClick={searchFavoriteACB}> Update </button>

            
        </div>
    
    <div className="homeMenu_search">
        <div className="logo-container">
        <img src="src/assets/logo.png" alt="" className="logo"/>
        </div>
        
        <div className="searchBar">
        <input value={props.text} onChange={textChangeHandlerACB}></input>   
        <button onClick={searchClickedHandlerACB}>Search!</button>
    </div>
    </div>
    </div>
);
}

 