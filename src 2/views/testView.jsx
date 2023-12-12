import "/src/style.css"
import React from 'react'


export default 
function TestView(props){

    function handleAboutACB(){
        window.location.hash="/about";
        return console.log("about");
    }
    function handleRankACB(){
        window.location.hash="/rank";
        return console.log("rank");

    }
    function handleCompareACB(){
        window.location.hash="/compare";
        return console.log("compare");

    }


    return(<div className = "menu">
    <ul>
        <li>Home</li>
	    <li onClick={handleRankACB}>CurrentRanking</li>
	    <li onClick={handleCompareACB}>Compare</li>
        <li onClick={handleAboutACB}>About</li>
    </ul>
    </div>
);
}

 