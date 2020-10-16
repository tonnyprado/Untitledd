import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Nosotros from './components/nosotros/Nosotros';
import Faq from './components/faq/Faq';
import Coleccion from './components/coleccion/Coleccion';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/nosotros' component={Nosotros}/>
        <Route path='/faq' component={Faq}/>
        <Route path='/coleccion' component={Coleccion}/>
      </Switch>
    </Router> 
    </>
  );
}

export default App;
