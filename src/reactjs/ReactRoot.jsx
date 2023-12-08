import { createHashRouter, RouterProvider } from "react-router-dom";
import {observer} from 'mobx-react-lite'
import Test from "./testPresenter";
import Rank from "./rankPresenter";
import About from "./aboutPresenter";
import Compare from "./comparePresenter";

export default observer(
    function ReactRoot(props){

        function makeRouter(){
            {console.log(props.model)}
            return createHashRouter([
                {
                    path: "/",
                    element: <Test/>
                },
                {
                    path: "/rank",
                    element: <Rank props={props.model}/>
                },
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/compare",
                    element: <Compare/>
                },
            ])
        }
            

            return((
            <div className="root" >
               <RouterProvider router={makeRouter()} />
            </div>
           )
            ) 
        }
 )


  