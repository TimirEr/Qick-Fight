import RankView from "../views/rankView";
import { observer } from "mobx-react-lite";

export default observer(

    function Rank(props){
        const propsfighter = props.props.testfunction();
        //console.log(propsfighter.promisResult);
    
        function changeTextInputACB(text){
            //Store new text in model
            props.props.setSearchQuery(text);
        }

        function searchFighterACB(){
            //Retrieve the dishes that fulfill the criteria.
            props.props.doSearch(props.props.searchParams);
        }

        function clickHandler(dish){
            //Show dish details
            console.log("dish clicked");
            props.model.setCurrentDish(dish.id);
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
        text={props.props.setSearchQuery.query} 
        changeText={changeTextInputACB} 
        searchClicked={searchFighterACB}
       />
        
        {promiseNoData(props.props.searchResultsPromiseState)||<RankView searchResults={props.props.searchResultsPromiseState.data} onDishClick={clickHandler} />}
    </div>
    );

    }



)