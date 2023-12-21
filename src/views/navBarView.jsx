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

    function handleLogInACB(event){
      console.log(props);
        props.setLoginStatus();
    }



    return(<div className="navbar">
      <ul>
        <li onClick ={onClickHomeACB}>Home</li>
        <li onClick ={onClickSearchACB}>Search</li>
        <li onClick ={onClickCompareACB}>Compare</li>
        <li onClick ={onClickAbout}>About</li>
        
        {(!props.loginStatus) ?  (<li onClick={handleLogInACB}> Sign In </li>) 
          : (<> 
          <li><img src={props.user.photoURL} alt="Profile" className="google_image"/></li>
          <li> <h5> {props.user.displayName}, {props.user.email}</h5> </li>
          <li onClick={handleLogInACB}> Logga ut</li>
            </>
          )
          }
      </ul>





    </div>
    );

    
}


export default NavbarView;