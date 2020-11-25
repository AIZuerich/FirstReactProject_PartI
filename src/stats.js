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




function Stats(){
 /*
fetch('https://showycoarsesearch.aizuerich.repl.co/gb-status')
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.error(err);
  });
 
*/
  return (
    
    <article id="about_me" >
   
    <iframe id="iframe" scrolling="no" src="xx" name="iframe_a" title="Iframe Example"></iframe>
   
    </article>
  )
 }; 


/*
const Greeting = () => {
  return React.createElement('div',{},React.createElement('h1',{},'Hello world'));
}*/

export default Stats;
