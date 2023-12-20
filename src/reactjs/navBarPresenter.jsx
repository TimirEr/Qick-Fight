
import { observer } from "mobx-react-lite";
import NavbarView from "../views/navBarView";



export default observer(

    function NavbarPresenter(props){


        function handleLoginACB(){
            console.log(props);
            props.props.loginForGoogle();
        }


        return (<NavbarView  //Todo    "props.props = props.model"
            user = {props.props.userState.user}
            loginStatus = {props.props.userState.loginStatus}
            setLoginStatus = {handleLoginACB}
            
        />
        )
    }

)
