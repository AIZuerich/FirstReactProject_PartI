import React from 'react'
///inject in root div
import ReactDom from 'react-dom'

//JSX RULES:
/*
1. return single Element 
2. use camelCase for html
3. className instead of class
4. close every Element
5. formatting return ()
*/

//nested components, react tools


function Struktur(){
  return (

    <section>
    <div id="first_div">
    <h1 id="Title_of_Webpage">Welcome To My DEV Page.</h1>
    <p>My name is Davon! You can find me on Discord. I build bots!</p>
    <p>My Languages: Javascript, C++ and Python</p>
    <Image_0/>
    </div>
    <hr/>
    <div id="second_div">
    <h2>
    <p>My Projects</p>
    </h2>
    </div>
    
    <div id="thirt_div">
    <Projekt_1/>
    </div>

    </section>
  )
 }; 

const Projekt_1 = () => {
  return (<article>

  <div>
  <Title_1/>
  <Image_1/>
  <Description_1/>
  <Github_1/>
  <Top_1/>
  </div>

  </article>)
}


//images
const Image_0 = () => <img id="image" src="https://cdn.discordapp.com/attachments/776562672375431234/776895987355484256/Unbenannt.png" />
const Image_1 = () => <img id="image" src="https://images.discordapp.net/avatars/681875101020454930/37b0585b54deb8c3f5507a5451e44161.png" />


//Projekt_Title
const Title_1 = () => <h3 id="Title_1">Anti Spam Discord Bot</h3>


//Description

const Description_1 = () => <p id="description_1">Anti Raid & Bot tries to filter nsfw links. It mutes spamers.<br/>Besides, it is also a levelsystem bot.</p>


//github link

const Github_1 = () => <a id="github" href="https://github.com/AIZuerich/MY_ANTI_SPAM_BOT">Bot On Github<br/></a>
const Top_1 = () => <a id="top" href="https://top.gg/bot/681875101020454930"> Bot On top.gg</a>
/*
const Greeting = () => {
  return React.createElement('div',{},React.createElement('h1',{},'Hello world'));
}*/

ReactDom.render(<Struktur></Struktur>,document.getElementById('root'));