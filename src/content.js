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


function Content(){
  return (

   
    <article id="article">
   
    <center>
    <section id="section_1">
    <div>   
    <h1>MY DEV PAGE</h1>
    <p>Welcome to my DEV page. I build bots!</p>
    <p>I work with: Javascript, C++ and Python</p>
    <p>Find me on Discord!</p>
    <Image_0/>
    <a href="https://www.freecodecamp.org/a_i">On Codecamp</a>
 
    <a href="https://github.com/AIZuerich">My Github</a>
 
    <a href="https://gist.github.com/c1t">Old Gists</a>

    </div>
    </section>
    </center>  

    <br/>
    <br/>
      <br/>
    <br/>
    <center>
   
    <section id="section_3">
     
    <div id="Projekte_">
    <Projekt_1/>
   
    </div>
    
    </section>
    </center>
  
    <section id="foot_notes">
    <div id="footer">
    <p>Support:</p>
    <p>ai_dev@gmx.ch</p>   
    </div>
    </section>
    
    
    </article>
  )
 }; 

const Projekt_1 = () => {
  return (<article>

  <div>
  <Title_1/>
 
  <Description_1/>
  <div id="test2">

  <Github_1/>
  <Top_1/>
      <br/>
    <br/>
        <br/>
    <br/>
   </div>
   <div>
     <center id="down"><img id="test5" width="320px" height="160px" src={logo}/></center>
     </div>
  </div>

  </article>)
}





//images
const Image_0 = () => <center><img id="image" src="https://cdn.discordapp.com/attachments/776562672375431234/776895987355484256/Unbenannt.png" /></center>
const Image_1 = () => <center><img id="image" src="https://images.discordapp.net/avatars/681875101020454930/37b0585b54deb8c3f5507a5451e44161.png" /></center>
const Image_2 = () => <center><img id="image" width="130px;" height="132px;" src="https://cdn.discordapp.com/attachments/776562672375431234/776908457659465739/d41a679e3e9c340c7e4a21bd160aa468.png" /></center>
const Image_3 = () => <center><img id="image"  src="https://top.gg/api/widget/681875101020454930.png" /></center>

//Projekt_Title
const Title_1 = () => <center><h3 id="Title_1">Anti Spam Discord Bot</h3></center>
const Title_2 = () => <center><h3 id="Title_2">Learn Languages Bot, the Goose!</h3></center>


//Description

const Description_1 = () => <div><p id="description_1">Anti Raid & Spam.</p><p>Bot filters nsfw links.</p><p> It mutes spammers and raiders. </p><p> Besides, it is also a level-system bot.</p></div>

const Description_2 = () => <div><p id="descrption_2"> Learn plenty of languages with our vocabulary quizes.</p><p> And! Use our translator and our country searcher.</p></div>



//github link

const Github_1 = () => <a id="github" href="https://github.com/AIZuerich/MY_ANTI_SPAM_BOT">On Github<br/></a>
const Top_1 = () => <a id="top" href="https://top.gg/bot/681875101020454930"> Bot On top.gg</a>


const Github_2 = () => <a id="github" href="https://github.com/AIZuerich/languxagev001">On Github<br/></a>
const Top_2 = () => <a id="top" href="https://top.gg/bot/710212974970798231"> Bot On top.gg</a>

/*
/*
const Greeting = () => {
  return React.createElement('div',{},React.createElement('h1',{},'Hello world'));
}*/
/*
const Greeting = () => {
  return React.createElement('div',{},React.createElement('h1',{},'Hello world'));
}*/

export default Content;
