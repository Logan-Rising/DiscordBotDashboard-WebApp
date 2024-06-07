import React, {useState} from 'react'
import genus from '../assets/genus.png'
import { bot_name } from '../config';

function Genus() {
    const text = bot_name + ' is part of an ecosystem of applications that has been declared as a genus, the Discord Bot Genus.' +
    'The term genus can directly be related ' + bot_name + '.  There is a group of applications that work together to track, analyze, relay, and display' +
    ' information, as well as share common characteristics.  On the back end, there is a Discord Bot that is actively parsing messages and '+
    'serving users via the Discord messaging platform and' + 
    'commands. There is a Firestore Database that' +
    ' is connected to the Discord Bot and is storing information that ' + bot_name + ' is tracking. There is a REST API that is able to retrieve the data from' + 
    'the Firestore Database and relay it to the front end, which is what you\'re' +
    ' looking at now.  All these applications working together makes up the Discord Bot Genus. For more information on how each of the applications work,' + 
    'check out the How It Works section!';
    
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h2>What Is A Genus?</h2>
        </div>
        <h4>A genus, as defined by <a href="https://www.merriam-webster.com/dictionary/genus">Merriam Webster</a>, is a class, kind, or group marked by common characteristics or by one common characteristic.</h4>

        <div className='main-title'>
            <h2>How Can A Discord Bot Be Considered A Genus?</h2>
        </div>

        <h4>{bot_name} is part of an ecosystem of applications and the term genus can directly be related to {bot_name} .  There is a group of applications that work together to track, analyze, relay, and display
    information, as well as share common characteristics.  On the back end, there is a Discord Bot that is actively parsing messages and 
    serving users via the Discord messaging platform and
    commands. There is a Firestore Database that
     is connected to the Discord Bot and is storing information that {bot_name} is tracking. There is a REST API that is able to retrieve the data from 
    the Firestore Database and relay it to the front end, which is what you're
    looking at now.  All these applications working together makes up the Discord Bot Genus. For more information on how each of the applications work,
    check out the <a href="#howitworks">How It Works</a> section below!</h4>

        <img src={genus} alt="Discord Bot Genus" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '20%'}}></img>

        <div className='main-title' id='howitworks'>
            <h2>How Does It Work?</h2>
        </div>

        <h3><u>How The Discord Bot Runs</u></h3>
        <h4>
          At the core, the is a Discord Bot that is running on a server pc.  The Discord Bot is running using 
          <a href="https://nodejs.org/en"> Node JS </a>
          in combination with
          <a href="https://discord.js.org/#/"> Discord JS </a>
          to run the Discord Bot services. Node JS is perfect for this application because it allows JavaScript code to be executed outside of a web browser while still maintaining
          the asynchronous, event-driven model.
        </h4>

        <h3><u>How Firebase Connectivity Works</u></h3>
        <h4>
          Google Firebase 
          is used heavily throughout this project. 
          <a href="https://firebase.google.com/"> Google Firebase </a> 
          provides most of the needed tools for the genus to run. Firstly, Firebase provides
           a Firestore Database that is used to store all of the data tracked by the Discord Bot.  Cloud Firestore is a NoSQL document database from Google Cloud that allows users to store, sync, and query data for web and mobile applications. 
           Then, there is this website, which is hosted by 
            Google Hosting as a web app. Finally, there is a REST API that is hosted by Google Cloud Functions, and
            is used as a middleware between the database and this web app.  The Discord Bot is able to connect directly to the Firestore Database via
             the Firebase Config SDK and the REST API is able to connect to the Firestore Database through the admin SDK. The mobile app is not hosted by Firebase,
             but still uses the Firebase Config SDK to connect to the database as it is an admin app, so there is no need to coneceal information.
        </h4>

        <h3><u>Technical Info</u></h3>
        <h4>
          The Discord Bot, REST API, and web app are all written in Javascript. The web app is bootstrapped with
           <a href="https://react.dev/"> React </a>
           and
           <a href="https://vitejs.dev/"> Vite JS </a>
           .
          The admin mobile application is written in TypeScript and bootstrapped with 
          <a href="https://reactnative.dev/"> React Native </a>
          .

        </h4>

        <h3><u>Where To Find There Projects</u></h3>
        <h4>
          The described projects above are all available via Github with the following links:
        </h4>
        <h4>
        <a href="https://github.com/Logan-Rising/DiscordBot"> Discord Bot </a>
        </h4>
        <h4>
        <a href="https://github.com/Logan-Rising/DiscordBotDashboard-WebApp"> Discord Bot Dashboard Web App </a>
        </h4>
        <h4>
        <a href="https://github.com/Logan-Rising/firebase_api"> REST API </a>
        </h4>
        <h4>
        <a href="https://github.com/Logan-Rising/DiscordBotDashboard"> Discord Bot Dashboard Mobile App </a>
        </h4>
    </main>
  )
}

export default Genus
