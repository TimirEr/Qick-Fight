import RankView from "../views/rankView";
import { observer } from "mobx-react-lite";

export default observer(
    

    function Rank(props){
        const propsfighter = props.props.testfunction();
        console.log(props);
    return <RankView fighterName={propsfighter}></RankView>
})