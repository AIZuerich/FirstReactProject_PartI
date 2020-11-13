import React from 'react'
///inject in root div
import ReactDom from 'react-dom'

//stateless function "captial Letter => component"
// always return JSX


 function Greeting(){
  return (
    <div>
      <h4>Hello World!</h4>
      
    </div>
  )
 }; 

/*
const Greeting = () => {
  return React.createElement('div',{},React.createElement('h1',{},'Hello world'));
}*/

ReactDom.render(<Greeting></Greeting>,document.getElementById('root'));