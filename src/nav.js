import React from 'react';
///inject in root div
import ReactDom from 'react-dom';
//CSS
import './index.css';

import { Link } from 'react-router-dom';
//JSX RULES:
/*
1. return single Element 
2. use camelCase for html
3. className instead of class
4. close every Element
5. formatting return ()
*/

//nested components, react tools


function Nav(){
  return (

    <article id="about_me">
    <div id="main">
    <ol>
    <Link to="/">
    <li>Home</li>
    </Link>
    <Link to="/about">
    <li>About</li>
    </Link>
    </ol>
    </div>
    </article>
  )
 }; 


/*
const Greeting = () => {
  return React.createElement('div',{},React.createElement('h1',{},'Hello world'));
}*/

export default Nav;
