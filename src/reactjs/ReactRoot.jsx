import { createHashRouter, RouterProvider } from "react-router-dom";
import {observer} from 'mobx-react-lite'
import Test from "./testPresenter";

export default observer(
    function ReactRoot(props){
        function makeRouter(){
            return createHashRouter([
                {
                    path: "/",
                    element: <Test/>
                },
            ])
        }
            return ((
            
            <div className="root" >
                <p>LOOOOLL LEAGUE OF LEGENDS !!!!!!!!!!!</p>
               <RouterProvider router={makeRouter()} />
            </div>
           )
            ) 
        }
 )
    
  