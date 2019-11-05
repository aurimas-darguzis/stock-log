import React from 'react';
import ReactDOM from 'react-dom';
import './react/index.css';
import App from './react/App';
// import Router from './Router';
import * as serviceWorker from './react/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Electron is not working with BrowserRouter:
// https://stackoverflow.com/questions/36505404/how-to-use-react-router-with-electron/50404777#50404777

// need to use HashRouter isConstructSignatureDeclaration
//   <Router history={history}>
//     <App />
//   </Router>
