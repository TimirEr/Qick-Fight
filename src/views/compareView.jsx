import "/src/style.css"
import React from 'react'

import homeSearchPresenter from '../reactjs/homeSearchPresenter';

export default 
function CompareView(props){

    function textChangeHandlerACB(evt) {
        props.changeText(evt.target.value);
    }

    function searchClickedHandlerACB() {
        props.searchClicked();
    }

    function resetClickedHandlerACB(){
        props.resetClicked();
    }
    
    function addFighterToFavoriteACB(fighter){
      props.setFavoriteFighter(fighter.entity.name);
    }
