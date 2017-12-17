import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ConfigCV from './components/config-cv';
import CustomCV from './components/custom-cv';
import Home from './components/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
ReactGA.initialize( 'UA-00000000-0' );
ReactGA.pageview( window.location.pathname + window.location.search );

ReactDOM.render( <Router>
  <div className="App">
    <Route exact path="/" component={ Home }/>
    <Route path="/config" component={ ConfigCV } />
    <Route path="/custom/:config" component={ CustomCV } />
  </div>
</Router>,
document.getElementById( 'root' ) );
registerServiceWorker( );
