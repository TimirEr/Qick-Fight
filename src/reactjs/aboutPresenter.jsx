import AboutView from "../views/aboutView";
import { observer } from "mobx-react-lite";
import NavbarView from "../views/navBarView";

export default observer(
    
    function About(props){

        function handleLoginACB(){
            console.log(props);
            props.props.handleGoogleLogin();
        }

    return (<div>
        
        <div>
        <NavbarView 
            user = {props.props.userState.user}
            loginStatus = {props.props.userState.loginStatus}
            setLoginStatus = {handleLoginACB}
            
        />
        </div>
        <div>
            <AboutView></AboutView>
        </div>
    </div>
    );
})