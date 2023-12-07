import TestView from "../views/testView";
import { observer } from "mobx-react-lite";

export default observer(
    
    function Test(props){
        console.log(props.props.testing)
    return <TestView props={props}></TestView>
})