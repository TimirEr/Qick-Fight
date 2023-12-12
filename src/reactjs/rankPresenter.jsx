import RankView from "../views/rankView";
import { observer } from "mobx-react-lite";

export default observer(

    function Rank(props){
        const propsfighter = props.props.testfunction();
        //console.log(propsfighter.promisResult);
    
        function changeTextInputACB(text){
            //Store new text in model
            props.model.setSearchQuery(text);
            
        }

        function searchesDishesACB(){
            //Retrieve the dishes that fulfill the criteria.
            props.model.doSearch(props.props.searchParams);
        }

    function promiseNoData(promiseState){
        if(promiseState.promise){
            if (promiseState.data && !promiseState.error){
                return false;
            }

            if(promiseState.error){
                return <div>{promiseState.error}</div>
            }

            if(!promiseState.data && !promiseState.error){
                return <img src={"https://brfenergi.se/iprog/loading.gif"} alt= "Loading"/>
            }
        }
        return <div>no data</div>;
    }
    console.log(props);


    //return <RankView fighterName={propsfighter}></RankView>

    return (<div>
        <RankView 
       // text={props.model.searchParams.query} 
        changeText={changeTextInputACB} 
       // searchClicked={searchesDishesACB}
       />
        
        {//promiseNoData(props.model.searchResultsPromiseState)||<RankView searchResults={props.model.searchResultsPromiseState.data} onDishClick={onDishClickHandlerACB}/>
        }
    </div>
    );

    }



)