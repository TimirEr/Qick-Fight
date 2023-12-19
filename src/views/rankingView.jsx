import "/src/style.css"
import React, { useEffect } from 'react';

export default 
function RankingView(props){


    function doSearchACB(fighter){
        props.searchFighter(fighter);
    }

    function onClickACB(){
        props.ranking();
        
       
        //console.log(props.array1[0]?.data)
        

    

        //props.array1[0].data?.results[0]?.entity?.name
    

        


    }


    

    function showFighter(fighter){
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

            <div className="result_button">
              <button onClick={() => addFighterToFavoriteACB(fighter)} className="result_button1">Add to favorite</button>
              <button onClick={handleHomeACB} className="result_button2">compare</button>
            </div>
            </span>
            
        );
    }



    const imageUrl1 = props.array1_3?.length > 0 ? props.array1_3 : 'https://brfenergi.se/iprog/loading.gif'
    const imageUrl2 = props.array2_3?.length > 0 ? props.array2_3 : 'https://brfenergi.se/iprog/loading.gif'
    const imageUrl3 = props.array3_3?.length > 0 ? props.array3_3 : 'https://brfenergi.se/iprog/loading.gif'

    return (<div className="ranking_list">

    <div>
        <button onClick={onClickACB}> CHECK CURRENT RANKING </button>    
    </div>    


   

    <div className= " ranking_fighter1">
        <p>
        <strong>Name:</strong> { props.array1_1?.results?.length > 0 ? props.array1_1.results[0].entity.name : "" }
        
        
       
        
        
        </p>

        <p>
        <strong>Gender:</strong>  { props.array1_1?.results?.length > 0 ? props.array1_1.results[0].entity.gender : "" }
        </p>

        <p>
        <strong>Country:</strong> { props.array1_1?.results?.length > 0 ? props.array1_1.results[0].entity.country.name : "" }
        </p>
    
        <p>
        <strong>Record:</strong> 
        Wins: { props.array1_1?.results?.length > 0 ? props.array1_1.results[0].entity.wdlRecord.wins : "" } 
        - Losses: { props.array1_1?.results?.length > 0 ? props.array1_1.results[0].entity.wdlRecord.losses : "" } 
        - Draws: { props.array1_1?.results?.length > 0 ? props.array1_1.results[0].entity.wdlRecord.draws : "" } 
        </p>
        {
            <img src={imageUrl1} alt={`FIGHTER`} />      
        }

        <h5>
            The image might take some time to load, click the button above to refresh, thank u!
        </h5>
    </div>


  
    <div className= " ranking_fighter2">
        <p>
        <strong>Name:</strong> { props.array2_1?.results?.length > 0 ? props.array2_1.results[0].entity.name : "" }
        </p>

        <p>
        <strong>Gender:</strong>  { props.array2_1?.results?.length > 0 ? props.array2_1.results[0].entity.gender : "" }
        </p>

        <p>
        <strong>Country:</strong> { props.array2_1?.results?.length > 0 ? props.array2_1.results[0].entity.country.name : "" }
        </p>
    
        <p>
        <strong>Record:</strong> 
        Wins: { props.array2_1?.results?.length > 0 ? props.array2_1.results[0].entity.wdlRecord.wins : "" } 
        - Losses: { props.array2_1?.results?.length > 0 ? props.array2_1.results[0].entity.wdlRecord.losses : "" } 
        - Draws: { props.array2_1?.results?.length > 0 ? props.array2_1.results[0].entity.wdlRecord.draws : "" } 
        </p>
        {
            <img src={imageUrl2} alt={`FIGHTER`}  /> 
        }

        <h5>
            The image might take some time to load, click the button above to refresh, thank u!
        </h5>
    </div>


    <div className= " ranking_fighter3">
        <p>
        <strong>Name:</strong> { props.array3_1?.results?.length > 0 ? props.array3_1.results[0].entity.name : "" }
        </p>

        <p>
        <strong>Gender:</strong>  { props.array3_1?.results?.length > 0 ? props.array3_1.results[0].entity.gender : "" }
        </p>

        <p>
        <strong>Country:</strong> { props.array3_1?.results?.length > 0 ? props.array3_1.results[0].entity.country.name : "" }
        </p>
    
        <p>
        <strong>Record:</strong> 
        Wins: { props.array3_1?.results?.length > 0 ? props.array3_1.results[0].entity.wdlRecord.wins : "" } 
        - Losses: { props.array3_1?.results?.length > 0 ? props.array3_1.results[0].entity.wdlRecord.losses : "" } 
        - Draws: { props.array3_1?.results?.length > 0 ? props.array3_1.results[0].entity.wdlRecord.draws : "" } 
        </p>
        {
             <img src={imageUrl3} alt={`FIGHTER`} /> 
        }

        <h5>
            The image might take some time to load, click the button above to refresh, thank u!
        </h5>
    </div>


    </div>

     
    );

    




    /*return(<div className="rankingCSS">
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
    );*/


}