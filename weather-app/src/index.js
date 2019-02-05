import React from 'react';
import ReactDOM from 'react-dom';
// import bootstrap
//import 'C:/Users/Clem/OneDrive/Informatik_Lernen/git-repos/learning-javascript/weather-app/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
