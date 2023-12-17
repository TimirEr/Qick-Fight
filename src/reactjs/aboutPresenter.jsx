import AboutView from "../views/aboutView";
import { observer } from "mobx-react-lite";
import NavbarView from "../views/navBarView";

export default observer(
    
    function About(){
    return (<div>
        
        <div>
            <NavbarView></NavbarView>
        </div>
        <div>
            <AboutView></AboutView>
        </div>
    </div>
    );
})