import "/src/style.css"
import React from 'react'


function NavbarView(props){
    
    function onClickHomeACB(){
      window.location.hash = '#/';
    }
    function onClickSearchACB(){
        window.location.hash = '#/homeSearch';
    }
    function onClickCompareACB(){
        window.location.hash = '#/compare';
    }
    function onClickAbout() {
        window.location.hash = "#/about";
    }

    return(<div className="navbar">
      <ul>
        <li onClick ={onClickHomeACB}>Home</li>
        <li onClick ={onClickSearchACB}>Search</li>
        <li onClick ={onClickCompareACB}>Compare</li>
        <li onClick ={onClickAbout}>About</li>
      </ul>
    </div>
    );

    
}


export default NavbarView;