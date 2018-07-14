import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)


ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
  ), document.getElementById('root'));

registerServiceWorker();
