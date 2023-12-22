import "/src/style.css"
import React from 'react'

export default (props) => {
    function handleHomeACB(){
        window.location.hash="/";
        return console.log("home");
    }


    function addFighterToFavoriteACB(fighter){
      props.setFavoriteFighter(fighter.entity.name);
    }

    



        function showFighter(fighter){

          const imageUrl = props.imageResults;
  
          return (
              <span key={fighter.entity.id}  className="fighterDetails">
                  <div className="fighterDetails_basic">
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
  
                <p>
                  <strong>Ranking:</strong> {fighter.entity.ranking != 0 ? (fighter.entity.ranking != null ? fighter.entity.ranking : 'Unranked' ) : "Champion" }
                </p>
  
                <p>
                  <strong>Overall Score:</strong> {fighter.score}
                </p>
  
                </div><br />
                <div className="fighterDetails_stats">
              <p>
                <strong> Career Statistics</strong> 
              </p>

              <p>
              <strong> Striking</strong>
              </p>

            <p>
              <>Strikes Landed/Round:</> {fighter.data?.issued?.strikes?.total?.landed?.roundAvg}
            </p>
            <p>
              <>Significant Strikes Avg/ Round:</> {fighter.data?.issued?.significantStrikes?.total?.landed?.roundAvg} -  <>Head:</> {fighter.data?.issued?.significantStrikes?.head?.landed?.roundAvg} - Body {fighter.data?.issued?.significantStrikes?.body?.landed?.roundAvg} - Legs {fighter.data?.issued?.significantStrikes?.legs?.landed?.roundAvg}
            </p>

            <p>
              <strong> Grappling</strong>
            </p>

            <p>
              <>Takedowns Attempted/15 min:</> {fighter.data?.issued?.takedowns?.total?.attempted?.avg15min}
            </p>
            <p>
            <>Takedowns Succeeed/15 min:</> {fighter.data?.issued?.takedowns?.total?.succeeded?.avg15min}
            </p>  
            
            <p>
            <>Takedowns Defended/15 min: </> {fighter.data?.received?.takedowns?.total?.defended?.avg15min} out of {fighter.data?.received?.takedowns?.total?.attempted?.avg15min}
            </p>

            

          <p>
              <>Submission Average/15 min</> {fighter.data?.issued?.submissions?.total?.attempted?.avg15min}
            </p>
          </div>

        <div className="fighterDetails_image">
            <img src={fighter.imageData} alt={`Image of ${fighter.entity.name}`} />
        </div> 
  
          
  
               
              <div className="result_button">
                <button onClick={() => addFighterToFavoriteACB(fighter)} className="result_button1">Add to favorite</button>
                <button onClick={handleHomeACB} className="result_button2">Back</button>
              </div>
              </span>
              
            );
          }
  



return(<div>
  {props.testResult !== null ? props.testResult.map(showFighter) 
    : <p> No following fighter found!</p>}
  </div>
);


}
