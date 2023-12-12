import "/src/style.css"
import React from 'react'

export default 
function RankView(props){

    function handleHomeACB(){
        window.location.hash="/";
    }

    function textChangeHandlerACB(evt){
        props.changeText(evt.target.value);
        console.log(props.changeText);    
    }

    function searchClickedHandlerACB(){
        props.searchClicked();
    }

    /*return (<div className = "ranking">
        <button onClick={handleHomeACB}> Home </button>
        <ul>
            <li>API Call shows on console {props.name}</li>
    </ul>
    </div>
    );*/

    return(<div>
        <input value={props.name || ""} onChange={textChangeHandlerACB}></input>        
        <button onClick={handleHomeACB}>Search!</button>
        <button onClick={handleHomeACB}>Compare</button>
    </div>

    )
}