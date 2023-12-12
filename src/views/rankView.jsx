import "/src/style.css"
import React from 'react'

export default 
function RankView(props){

    function handleHomeACB(){
        window.location.hash="/";
    }

    function textChangeHandlerACB(evt){
        props.changeText(evt.target.value);
    }

    function searchClickedHandlerACB(){
        console.log("searchedWorked1")
        props.searchClicked();
    }

    console.log(props);

    return(<div>
        <input value={props.text} onChange={textChangeHandlerACB}></input>   
        <button onClick={searchClickedHandlerACB}>Search!</button>
    </div>

    )
}