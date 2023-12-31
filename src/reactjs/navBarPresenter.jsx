
import { observer } from "mobx-react-lite";
import NavbarView from "../views/navBarView";
import { auth } from "../firebaseModel";
import { signInWithPopup, GoogleAuthProvider,signOut} from "firebase/auth";


export default observer(

    function NavbarPresenter(props){


        function handleLoginACB(){
            console.log(props);

            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
              console.log("Sign In User: ")
              console.log(result)

              const user = result.user;
              props.props.UserState.user = user;
              props.props.UserState.loginStatus = true;
              console.log("LogIn successfully");
          
            }).catch((error) => {

            }); 
        }

        function handleLogoutACB(){
            signOut(auth).then(() => {

                props.props.UserState.loginStatus = false;
                props.props.UserState.user = null;
                console.log("LogOut successfully");
        
              }).catch((error) => {
                console.error(error);
              });

        }


        return (<NavbarView 
            user = {props.props.UserState.user}
            loginStatus = {props.props.UserState.loginStatus}
            setLoginStatus = {handleLoginACB}   
            setLogoutStatus = {handleLogoutACB}         
        />
        )
    }

)
