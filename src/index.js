import React from 'react'
///inject in root div
import ReactDom from 'react-dom'


import logo from './Unbenannt.png';
//CSS
import './index.css'

//route
import About from './about.js';
import Content from './content.js';
import Nav from './nav.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Struktur(){
  return (
    
    <article>
    <Nav/>
    <Router>
    <About/>
    <Content/>
    </Router>
    </article>

  )
 }; 



ReactDom.render(<Struktur></Struktur>,document.getElementById('root'));