import "/src/style.css"
import React from 'react'

export default 
function RankView(props){

    console.log(props);
    return (<div className = "ranking">
        <ul>
        <li>{props.name}</li>
    </ul>
    </div>
    );
}