import "/src/style.css"
import React, { useEffect, useState } from 'react';

export default 
function RankingView(props){



  
    function onClickACB(){
        props.ranking();
    }


    const imageUrl1 = props.array1_3?.length > 0 ? props.array1_3 : 'https://brfenergi.se/iprog/loading.gif'
    const imageUrl2 = props.array2_3?.length > 0 ? props.array2_3 : 'https://brfenergi.se/iprog/loading.gif'
    const imageUrl3 = props.array3_3?.length > 0 ? props.array3_3 : 'https://brfenergi.se/iprog/loading.gif'
    const imageUrl4 = props.array4_3?.length > 0 ? props.array4_3 : 'https://brfenergi.se/iprog/loading.gif'
    const imageUrl5 = props.array5_3?.length > 0 ? props.array5_3 : 'https://brfenergi.se/iprog/loading.gif'
    const imageUrl6 = props.array6_3?.length > 0 ? props.array6_3 : 'https://brfenergi.se/iprog/loading.gif'
    

    return (<div className="ranking_list">

    <div>
        <button onClick={onClickACB}> CHECK CURRENT CHAMPIONS </button>    
    </div>    

    <div className= " ranking_fighter1">
        <h4>
            LightWeight Champion
        </h4><br />
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
        </p><br />
        {
            <img src={imageUrl1} alt={`FIGHTER`} />      
        }

        <h5>
            The image might take some time to load, click the button above to refresh, thank u!
        </h5>
    </div>


  
    <div className= " ranking_fighter2">
        <h4>
            WelterWeight Champion
        </h4> <br />
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
        </p><br />
        {
            <img src={imageUrl2} alt={`FIGHTER`}  /> 
        }

        <h5>
            The image might take some time to load, click the button above to refresh, thank u!
        </h5>
    </div>


    <div className= " ranking_fighter3">
        <h4>
            FlyWeight Champion
        </h4><br />
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
        </p><br />
        {
             <img src={imageUrl3} alt={`FIGHTER`} /> 
        }

        <h5>
            The image might take some time to load, click the button above to refresh, thank u!
        </h5>
    </div>

    <div className= " ranking_fighter4">
        <h4>
            HeavyWeight Champion
        </h4><br />
        <p>
        <strong>Name:</strong> { props.array4_1?.results?.length > 0 ? props.array4_1.results[0].entity.name : "" }
        </p>

        <p>
        <strong>Gender:</strong>  { props.array4_1?.results?.length > 0 ? props.array4_1.results[0].entity.gender : "" }
        </p>

        <p>
        <strong>Country:</strong> { props.array4_1?.results?.length > 0 ? props.array4_1.results[0].entity.country.name : "" }
        </p>
    
        <p>
        <strong>Record:</strong> 
        Wins: { props.array4_1?.results?.length > 0 ? props.array4_1.results[0].entity.wdlRecord.wins : "" } 
        - Losses: { props.array4_1?.results?.length > 0 ? props.array4_1.results[0].entity.wdlRecord.losses : "" } 
        - Draws: { props.array4_1?.results?.length > 0 ? props.array4_1.results[0].entity.wdlRecord.draws : "" } 
        </p><br />
        {
             <img src={imageUrl4} alt={`FIGHTER`} /> 
        }

        <h5>
            The image might take some time to load, click the button above to refresh, thank u!
        </h5>
    </div>


    <div className= " ranking_fighter5">
        <h4>
            LightHeavyWeight Champion
        </h4><br />
        <p>
        <strong>Name:</strong> { props.array5_1?.results?.length > 0 ? props.array5_1.results[0].entity.name : "" }
        </p>

        <p>
        <strong>Gender:</strong>  { props.array5_1?.results?.length > 0 ? props.array5_1.results[0].entity.gender : "" }
        </p>

        <p>
        <strong>Country:</strong> { props.array5_1?.results?.length > 0 ? props.array5_1.results[0].entity.country.name : "" }
        </p>
    
        <p>
        <strong>Record:</strong> 
        Wins: { props.array5_1?.results?.length > 0 ? props.array5_1.results[0].entity.wdlRecord.wins : "" } 
        - Losses: { props.array5_1?.results?.length > 0 ? props.array5_1.results[0].entity.wdlRecord.losses : "" } 
        - Draws: { props.array5_1?.results?.length > 0 ? props.array5_1.results[0].entity.wdlRecord.draws : "" } 
        </p><br />
        {
             <img src={imageUrl5} alt={`FIGHTER`} /> 
        }

        <h5>
            The image might take some time to load, click the button above to refresh, thank u!
        </h5>
    </div>


    <div className= " ranking_fighter6">
        <h4>
            MiddleWeight Champion
        </h4> <br />
        <p>
        <strong>Name:</strong> { props.array6_1?.results?.length > 0 ? props.array6_1.results[0].entity.name : "" }
        </p>

        <p>
        <strong>Gender:</strong>  { props.array6_1?.results?.length > 0 ? props.array6_1.results[0].entity.gender : "" }
        </p>

        <p>
        <strong>Country:</strong> { props.array6_1?.results?.length > 0 ? props.array6_1.results[0].entity.country.name : "" }
        </p>
    
        <p>
        <strong>Record:</strong> 
        Wins: { props.array6_1?.results?.length > 0 ? props.array6_1.results[0].entity.wdlRecord.wins : "" } 
        - Losses: { props.array6_1?.results?.length > 0 ? props.array6_1.results[0].entity.wdlRecord.losses : "" } 
        - Draws: { props.array6_1?.results?.length > 0 ? props.array6_1.results[0].entity.wdlRecord.draws : "" } 
        </p><br />
        {
             <img src={imageUrl6} alt={`FIGHTER`} /> 
        }

        <h5>
            The image might take some time to load, click the button above to refresh, thank u!
        </h5>
    </div>
    </div>
     
    );


}
