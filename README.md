# Qick-Fight

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

SETUP: 

Short overview on how to setup the project if the hosting website is down. 
First step is to clone the project and go through the npm install, install firebase and npm fund commands. Then there are two files that will be missing in the 
repository, apiConfig.js and firebaseConfig in src/. 

These two files will need to be created and an acount that is subscribed to the API: https://rapidapi.com/fluis.lacasse/api/mmaapi/ will also need to be used to be able to authenticate all the API calls. 

The firebaseconfig file should also be added, this is done to connect the to the firebase so when a user logs in uisng thier google account it is stored in the firebase.  The way it should be structured is as shown below:

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {

     apiKey: "AIzaSyDlCmp149q7ZHTakem6Sg_lsyASUEpX4pQ",
    authDomain: "quickfight.firebaseapp.com",
    databaseURL: "https://quickfight-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "quickfight",
    storageBucket: "quickfight.appspot.com",
    messagingSenderId: "842757669436",
    appId: "1:842757669436:web:c2b254d65225cf877d3939",
    measurementId: "G-7G4CXRQ298"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { app, auth, provider, firebaseConfig };



Short description of your project:

Our project will be a website where it is possible to look at stats from the UFC in different ways, such as looking at specific fighters, comparing fighters, and so on. 

What you have done:

We are done with the basic structure of the website and the basic outline of the code. We have set up a working react vite framework and designed a functional Model View Presenter codebase where we have made calls to our chosen API. We have also hosted the website via Firebase. 

What you still plan to do:

There are still parts of the website missing, those views and presenters still need to be created. We need to show the user when data is loading, we need login functionality where we can store a user's favorated fighters, so that they have easy access to them. We also want a search functionality. 

Your project file structure (short description/purpose of each file):

Here is a short description of the files in the project:

Style.css:
Has all of our CSS for all the views, we will split this file into different CSS files later. 

resolvePromis.js:
Has all the logic for handling asynchronous data and callbacks in our program, such as API calls. 

main.jsx:
Main is the enrty point of the website where everything that needs to be initialized or bootstrapped to make the website work is done. Such as the model, reactiveModel, ReactRoot, Firebase, and so on...

firebaseModel.js:
This is where persistence logic, saving and loading persistent data from Firebase servers, will be handled in the future. 

firebaseConfig.js:
Will have the Firebase login and other such information, It will be gitIgnored later. 

fighterSource.js:
The fighterSource will handle all the calls to API so that we can separate it from the model. Model functions will call on functions from fighterSource. 

apiConfig.js:
The API config will be gitignored later and will have the cost of the API key and maybe API URLs in the future. 

Model.js:
This is the model of the entire website that stores all the data and functions that later will be used in presenters to send to the views for the user to see. 

views folder:
All the views have the HTML code for a part of the website and send back function calls to the presenters. 

aboutView.jsx:
Has the about page HTML where the creators of the website are credited.

compareView.jsx:
The comapreView will have the HTML where you can compare two fighters and their stats.

rankView.jsx: 
Will be where you can see the rankings of all the fighters and search for a specific fighter and favorite fighters for later. 

testView.jsx:
Will be renamed to home or something similar because that is the functionality it has.

reactJS folder:
ReactRoot is where the reactRoot code resides that has the HashRouter and root HTML code. This is where the reactive model is first sent from main and where it sends the model to the currently used presenters. 

aboutPresenter.jsx:
Is the presenter for the About page which does not have that many dynamic features except for the back button.

comparePresenter.jsx:
Will have the logic that searches up two fighters and puts them side by side by sending that information to the view.

rankPresenter.jsx 
Will have the logic that sends the correct callbacks to the model that then uses fighterSource to retrieve information from the API. Will have a search function and button ACB and so on.

testPresenter.jsx:
Handles the home view and sends the important information to the test view. 

