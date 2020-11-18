import React from 'react'
///inject in root div
import ReactDom from 'react-dom'

import logo from './Unbenannt.png';
//CSS
import './index.css'
//JSX RULES:
/*
1. return single Element 
2. use camelCase for html
3. className instead of class
4. close every Element
5. formatting return ()
*/

//nested components, react tools


function About(){
  return (

    <article id="about_me">
    <div class="main">
    <h1>About Anti Spam</h1>
    </div>
    </article>
  )
 }; 


/*
const Greeting = () => {
  return React.createElement('div',{},React.createElement('h1',{},'Hello world'));
}*/

export default About;
