import { createHashRouter, RouterProvider } from "react-router-dom";
import {observer} from 'mobx-react-lite'
import Test from "./testPresenter";

export default observer(
    function ReactRoot(props){

        function makeRouter(){
            {console.log(props)}
            return createHashRouter([
                {
                    path: "/",
                    element: <Test props={props.model}/>
                },
            ])
        }
            

            return((
            <div className="root" >
                <p>LOOOOLL LEAGUE OF LEGENDS !!!!!!!!!!!</p>
                <p>{console.log(props)}</p>
               <RouterProvider router={makeRouter(props)} />
            </div>
           )
            ) 
        }
 )


  