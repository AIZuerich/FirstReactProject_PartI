import React from 'react'
///inject in root div
import ReactDom from 'react-dom'
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


function Nav(){
  return (

    <article id="about_me">
    <div id="main">
    <ol>
    <li>Home</li>
    <li>About</li>
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
