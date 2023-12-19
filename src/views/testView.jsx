import "/src/style.css"
import React from 'react'


export default 
function TestView(props){


    function handleAboutACB(){
        window.location.hash="/about";
        return console.log("about");
    }
    function handleCompareACB(){
        window.location.hash="/compare";
        return console.log("compare");
    }
    function handleSearchACB(){
        window.location.hash="/homeSearch";
        return console.log("homeSearch");
    }


    return(<div className = "menu">
        <div className="menu_content">


        
        <div className = "menu_title">
        <h1>Quick Fight</h1>
        </div>

        <div className = "menu_chant">
        <h3>The Lion Does Not Turn Around When the Small Dog Barks</h3><br />
        </div>

        <div className="menu_button">
        <button onClick={handleSearchACB} className="menu_button1">Search</button>
        <button onClick={handleCompareACB} className="menu_button2">Compare</button>
        <button onClick={handleAboutACB} className="menu_button3">About Us</button>
        </div>


	    </div>
        </div>
);
}

 