import "/src/style.css"
import React from 'react'
import Model from "../Model";
import { useState,useEffect } from "react";


export default 
function HomeSearchView(props){


    function textChangeHandlerACB(evt){
        props.changeText(evt.target.value);
    }

    function searchClickedHandlerACB(){
        props.searchClicked();
    }

    function searchFavoriteACB(){
        props.searchFavoriteFighter();
    }

    const [currentFavoriteFighter, setCurrentFavoriteFighter] = useState(Model.currentFavoriteFighter);



    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentFavoriteFighter !== Model.currentFavoriteFighter) {
                setCurrentFavoriteFighter(Model.currentFavoriteFighter);
            }
        }, 1000); // Polling every 1 second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [currentFavoriteFighter]);






    return(<div className="homeMenu">

        <div className="homeMenu_favo">
            <strong>Favorite:</strong><br />
            <div>{Model.currentFavoriteFighter}</div>
            <br/>            
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

 