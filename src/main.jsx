

/////  CODE FROM TW

import {createRoot} from "react-dom/client";
import ReactRoot from "./reactjs/ReactRoot.jsx";

import { observable, configure } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions
const reactiveModel= observable();

createRoot(document.getElementById('root'))
    .render(<ReactRoot model={reactiveModel}/>);


