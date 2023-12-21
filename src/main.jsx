

/////  CODE FROM TW

import "/src/firebaseModel.js";

import model from "./Model.js";
import {createRoot} from "react-dom/client";
import ReactRoot from "./reactjs/ReactRoot.jsx";


import {createElement} from "react";
window.React= {createElement:createElement};        

import { observable, configure } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions
const reactiveModel= observable(model);

createRoot(document.getElementById('root'))
    .render(<ReactRoot model={reactiveModel}/>);


