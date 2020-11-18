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
    <h1>About</h1>
    <div id="about_me_div">
    <p>This bot is a fun project. I was bothered by spam messages, so I decided to make a bot that filters and deletes them. 
<br/>
<br/>
Anti Spam function: My bot scans all messages and attachments for speed. If they are posted too fast by a user, they will be deleted. That's not all, even slow spams are deleted if the messages have the same length. The bot also scans the messages for NSFW links and other annoying links. Unfortunately this function is still very limited. One thing: Admins are ignored by the Anti Spam Bot.
<br/>
<br/>
The Raid function: In the channel named welcome a password is required for the new users. Only the admin can activate this command.
<br/>
<br/>
Plans: Better NSFW filter. Anti Virus Scanner for attachments.
<br/>
<br/>
News: We are reaching our limits. The bot is growing too fast. We try to find a solution.
</p>
    </div>
    </div>
    </article>
  )
 }; 


/*
const Greeting = () => {
  return React.createElement('div',{},React.createElement('h1',{},'Hello world'));
}*/

export default About;
