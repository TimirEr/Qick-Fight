import TestView from "../views/testView";
import { observer } from "mobx-react-lite";
import NavbarView from "../views/navBarView";

export default observer(
    
    function Test(props){
    return (<div>
        <div>
            {/*<NavbarView> </NavbarView>*/}
        </div>
        <div>
            <TestView> </TestView>
        </div>
    </div>
       
        
    );
}
)