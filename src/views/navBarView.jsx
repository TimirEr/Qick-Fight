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

    function handleLogInOutACB(event){
      console.log(props);
        props.setLoginStatus();
    }

    function testACB(){
      console.log(props.loginStatus)
    }

    return(<div className="navbar">
      <ul>
        <li onClick ={onClickHomeACB}>Home</li>
        <li onClick ={onClickSearchACB}>Search</li>
        <li onClick ={onClickCompareACB}>Compare</li>
        <li onClick ={onClickAbout}>About</li>
      </ul>

      <ul>
      <li>
            <h3>Inloggning</h3>
          </li>
          {props.loginStatus ? (
            <>
              <li>
                <p>
                  Inloggad som: {props.user.displayName}, {props.user.email}
                </p>
              </li>
              <li>
                <img src={props.user.photoURL} alt="Profile" />
              </li>
              <li>
                <button onClick={handleLogInOutACB}>
                  <h5>Logga ut</h5>
                </button>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogInOutACB}>
                <h5>Logga in med Google</h5>
              </button>
              <button onClick = {testACB}>
                jonathan
              </button>
            </li>
            )}
      </ul>
    </div>
    );

    
}


export default NavbarView;