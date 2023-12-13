import { createHashRouter, RouterProvider } from "react-router-dom";
import {observer} from 'mobx-react-lite'
import Test from "./testPresenter";
import About from "./aboutPresenter";
import Compare from "./comparePresenter";
import HomeSearch from "./homeSearchPresenter";

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
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/compare",
                    element: <Compare/>
                },
                {
                    path: "/homeSearch",
                    element: <HomeSearch props={props.model}/>
                },
            ])
        }
            

            return((
            <div className="root" >
               <RouterProvider router={makeRouter(props)} />
            </div>
           )
            ) 
        }
 )


  