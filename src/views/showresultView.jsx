import "/src/style.css"
import React from 'react'
import Model from "../Model";

export default (props) => {

    function handleHomeACB(){
        window.location.hash="/";
        return console.log("home");
    }

    function addFighterToFavoriteACB(fighter){
      console.log(Model);
      Model.setCurrentFavoriteFighter(fighter.entity.name);
    }

    function showFighter(fighter){
        return (
            <span key={fighter.entity.id}  className="fighterDetails">
                <div>
              <p>
                <strong>Name:</strong> {fighter.entity.name}
              </p>
              <p>
                <strong>Gender:</strong> {fighter.entity.gender}
              </p>
              <p>
                <strong>Country:</strong> {fighter.entity.country.name}
              </p>
              <p>
                <strong>Record:</strong> Wins: {fighter.entity.wdlRecord.wins} - Losses: {fighter.entity.wdlRecord.losses} - Draws: {fighter.entity.wdlRecord.draws}
              </p>
              </div><br />
              
              <p>
                <strong> Career Statistics</strong> 
              </p>

              <p>
              <strong> Striking</strong>
              </p>

            <p>
              <>Strikes Landed/Round:</> {props.statsResults?.issued?.strikes?.total?.landed?.roundAvg}
            </p>
            <p>
              <>Significant Strikes Avg/ Round:</> {props.statsResults?.issued?.significantStrikes?.total?.landed?.roundAvg} -  <>Head:</> {props.statsResults?.issued?.significantStrikes?.head?.landed?.roundAvg} - Body {props.statsResults?.issued?.significantStrikes?.body?.landed?.roundAvg} - Legs {props.statsResults?.issued?.significantStrikes?.legs?.landed?.roundAvg}
            </p>

            <p>
              <strong> Grappling</strong>
            </p>

            <p>
              <>Takedowns Attempted/15 min:</> {props.statsResults?.issued?.takedowns?.total?.attempted?.avg15min}
            </p>
            <p>
            <>Takedowns Succeeed/15 min:</> {props.statsResults?.issued?.takedowns?.total?.succeeded?.avg15min}
            </p>
            
            <p>
            <>Takedowns Defended/15 min: </> {props.statsResults?.received?.takedowns?.total?.defended?.avg15min} out of {props.statsResults?.received?.takedowns?.total?.attempted?.avg15min}
            </p>



          <p>
              <>Submission Average/15 min</> {props.statsResults?.issued?.submissions?.total?.attempted?.avg15min}
            </p>

             
            <div className="result_button">
              <button onClick={() => addFighterToFavoriteACB(fighter)} className="result_button1">Add to favorite</button>
              <button onClick={handleHomeACB} className="result_button2">Back</button>
            </div>
            </span>
            
          );
        }


return(<div>
    {props.searchResults.results !== null ? props.searchResults.results.map(showFighter) 
    : <p> No following fighter found!</p>}
    </div>


);


}