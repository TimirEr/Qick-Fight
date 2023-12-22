import "/src/style.css";
import React from 'react';

export default (props) => {
  function showFighter(fighter) {
    const { entity } = fighter;

    if (!entity) {
      return <p>No fighter data available</p>;
    }

    return (
      <span key={entity.id}>
        <h4>Fighter: </h4>
        <p>
          <strong>Name:</strong> {entity.name}
        </p>
        <p>
          <strong>Gender:</strong> {entity.gender}
        </p>
        <p>
          <strong>Country:</strong> {entity.country.name}
        </p>
        <p>
          <strong>Record:</strong> Wins: {entity.wdlRecord.wins} - Losses: {entity.wdlRecord.losses} - Draws: {entity.wdlRecord.draws}
        </p>

        <p>
          <strong> Career Statistics</strong>
        </p>

        <p>
          <strong> Striking</strong>
        </p>

        {props.statsResults && props.statsResults.issued && (
          <>
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
            <>Takedowns Succeeed/15 min:</> {props.statsResults?.issued?.takedowns?.total?.succeeded?.avg15min}
            <p>
              <p>
                <>Takedowns Defended/15 min: </> {props.statsResults?.received?.takedowns?.total?.defended?.avg15min} out of {props.statsResults?.received?.takedowns?.total?.attempted?.avg15min}
              </p>
            </p>
            <p>
              <>Submission Average/15 min</> {props.statsResults?.issued?.submissions?.total?.attempted?.avg15min}
            </p><br />
          </>
        )}
      </span>
    );
  }

  return (
    <div> 
      {console.log(props)}
      {props.searchResults?.results !== null
        ? props.searchResults?.results.map(showFighter)
  : <p>No such fighter found</p>}
    </div>
  );
}