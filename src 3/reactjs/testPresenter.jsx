import TestView from "../views/testView";
import { observer } from "mobx-react-lite";

export default observer(
    
    function Test(props){
    return (<div>
        <div>
            <TestView> </TestView>
        </div>
    </div>
       
        
    );
}
)