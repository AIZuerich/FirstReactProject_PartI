import React from 'react'
///inject in root div
import ReactDom from 'react-dom'


import logo from './Unbenannt.png';
//CSS
import './index.css'

//route
import About from './about.js';
import Stats from './stats.js';
import Content from './content.js';
import Nav from './nav.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Struktur(){
  return (
    
    <article>
     
    <Router>
      <Nav/>
      <Switch>
      <Route path="/stats" component={Stats}/>
      <Route path="/about" component={About}/>
      <Route path="/" component={Content}/>
      </Switch>
    </Router>
    </article>

  )
 }; 



ReactDom.render(<Struktur></Struktur>,document.getElementById('root'));