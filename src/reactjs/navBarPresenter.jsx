
import { observer } from "mobx-react-lite";
import NavbarView from "../views/navBarView";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { auth, provider } from "../firebaseModel";


export default observer(

    function NavbarPresenter(props){
        return (<NavbarView />)
    }

)
