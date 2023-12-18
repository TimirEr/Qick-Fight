import "/src/style.css"
import React from 'react'
import Model from "../Model";

export default (props) => {

    function handleHomeACB(){
        window.location.hash="/";
        return console.log("home");
    }

    function addFighterToFavoriteACB(fighter){
      Model.setCurrentFavoriteFighter(fighter.entity.name);
      console.log(Model);
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
              </div>
              <p>
                <strong> Career Statistics</strong> 
              </p>
             
              <p>
                <strong>Strikes Landed/Round:</strong> {props.statsResults?.issued?.strikes.total?.landed?.roundAvg}
              </p>
      
              <p>
                <strong>Significant Strikes Avg/ Round:</strong> {props.statsResults?.issued?.significantStrikes?.total?.landed?.roundAvg}
              </p>
               <p>
                <> Head:</> {props.statsResults?.issued?.significantStrikes?.head?.landed?.roundAvg} - Body {props.statsResults?.issued?.significantStrikes?.body?.landed?.roundAvg} - Legs {props.statsResults?.issued?.significantStrikes?.legs?.landed?.roundAvg}
              </p>
      
              <p>
                <strong>Strikes Landed/Round:</strong> {props.statsResults?.issued.strikes?.total?.landed?.roundAvg}
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