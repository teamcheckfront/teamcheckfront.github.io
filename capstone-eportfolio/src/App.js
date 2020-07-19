import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationBar from './components/NavigationBar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import AboutUs from './components/AboutUs.js';
import SecureDocuments from './components/SecureDocuments.js';
import Details from './components/Details.js';


function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/details" component={Details} />
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/securedocs" component={SecureDocuments}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;