import "/src/style.css"
import React from 'react'

export default 
function CompareView(props){


    function handleHomeACB(){
        window.location.hash="/";
    }

    return(<div className = "compare">
    <button onClick={handleHomeACB}> Home </button>
    </div>
    );

}