import "/src/style.css"
import React from 'react'

export default (props) => {

    function handleHomeACB(){
        window.location.hash="/";
        return console.log("home");
    }

    function addFighterToFavoriteACB(fighter){
<<<<<<< HEAD
      props.setFavoriteFighter(fighter.entity.name);
=======
      Model.setCurrentFavoriteFighter(fighter.entity.name);
      console.log(Model);
>>>>>>> 84a29ced3c99b9b846490d7e6b41a1fa1b0d2745
    }

    function showFighter(fighter){

        const imageUrl = props.imageResults;
        console.log(fighter);

        return (
            <span key={fighter.entity.id}  className="fighterDetails">
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
<<<<<<< HEAD
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

        <div>
            <img src={imageUrl} alt={`Image of ${fighter.entity.name}`} />
        </div> 




             
=======
>>>>>>> 84a29ced3c99b9b846490d7e6b41a1fa1b0d2745
            <div className="result_button">
              <button onClick={() => addFighterToFavoriteACB(fighter)} className="result_button1">Add to favorite</button>
              <button onClick={handleHomeACB} className="result_button2">compare</button>
            </div>
            </span>
            
          );
        }


return(<div>
    {console.log(props)}
    {props.searchResults.results !== null ? props.searchResults.results.map(showFighter) 
    : <p> No following fighter found!</p>}

  </div>
);


}


/*



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











*/ 