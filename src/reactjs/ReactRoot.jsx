import { createHashRouter, RouterProvider } from "react-router-dom";
import {observer} from 'mobx-react-lite'
import Test from "./testPresenter";
import About from "./aboutPresenter";
import Compare from "./comparePresenter";
import HomeSearch from "./homeSearchPresenter";

export default observer(
    function ReactRoot(props){

        function makeRouter(){
            return createHashRouter([
                {
                    path: "/",
                    element: <Test/>
                },
                {
                    path: "/about",
                    element: <About props = {props.model}/>
                },
                {
                    path: "/compare",
                    element: <Compare props = {props.model}/>
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


  