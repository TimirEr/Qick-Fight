import CompareView from "../views/compareView";
import { observer } from "mobx-react-lite";
import NavbarView from "../views/navBarView";

export default observer(
    
    function Compare(){
    return (<div>
        <div>
        <NavbarView></NavbarView>
        </div>
        <div>
        <CompareView></CompareView>
        </div>
    </div>

    );
})