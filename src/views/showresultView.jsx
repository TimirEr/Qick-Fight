import "/src/style.css"
import React from 'react'

export default (props) => {

    function showFighter(fighter){
        return(
            <span key={fighter.entity.id}>
                <p>
                    {fighter.entity.name}
                </p>
            </span>
        )
    }


return(<div>
    {props.searchResults.results !== null ? props.searchResults.results.map(showFighter) : <p> No following fighter found!</p>}
    </div>


);


}