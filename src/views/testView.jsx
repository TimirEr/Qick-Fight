import "/src/style.css"
import React from 'react'


export default 
function TestView(props){

    function handleHomeACB(){
        window.location.hash="/homeSearch";
        return console.log("home");
    }

    function handleAboutACB(){
        window.location.hash="/about";
        return console.log("about");
    }
    function handleCompareACB(){
        window.location.hash="/compare";
        return console.log("compare");

    }


    return(<div className = "menu">
    <ul>
        <li onClick={handleHomeACB}>Home</li>
	    <li onClick={handleCompareACB}>Compare</li>
        <li onClick={handleAboutACB}>About</li>
    </ul>
    </div>
);
}

 