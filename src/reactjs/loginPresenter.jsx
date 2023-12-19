import { observer } from "mobx-react-lite";
import LoginView from "../views/loginView";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { auth, provider } from "../firebaseModel";
import TestView from "../views/testView";

function LoginPresenter(props){
    //const provider = new GoogleAuthProvider();

    return (<TestView onLogIn = {onLogIn} onLogOut = {onLogOut}/>)

    function onLogIn(){
        signInWithPopup(auth, provider)
        console.log(auth.currentUser)
    }

    function onLogOut(){
        signOut(auth)
    }
}

export default observer(LoginPresenter);