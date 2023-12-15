import "/src/style.css"
import React from 'react'

export default 
function RankingView(props){

    return(<div className="rankingCSS">
    <div className="class1">
        <p>Light Weight</p>
    </div>
    <div className="class2">
        <p>Welter Weight</p>
    </div>
    <div className="class3">
        <p>Middle Weight</p>
    </div>
    <div className="class4">
        <p>Light HeavyWeight</p>
    </div>
    <div className="class5">
        <p>Heavy Weight</p>
    </div>
    </div>
    );

}