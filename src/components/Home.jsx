import React from 'react'
import { useState, useEffect } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import { CiCloudOn, CiCloudOff } from "react-icons/ci";
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { api_link, bot_name } from '../config'
 import BoxGrid from './BoxGrid';
 import FeaturesSection from './FeaturesSection';

function Home() {
  const [botStatus, setBotStatus] = useState('');

  const features = [
    {
      title: "Message Filtering",
      description: bot_name + " features a 100% customizable message filter system for your server!"
    },
    {
      title: "Reaction Roles",
      description: bot_name + " allows the use of slash commands to create a visually appealing reaction role message to let users add/remove their own roles."
    },
    {
      title: "Games",
      description: bot_name + " provides two games, Hangman and Tic-Tac-Toe, that can be played individually or between users."
    },
    {
      title: "Gerneral Commands",
      description: bot_name + " provides several general commands for users to interact with such as an 8 ball command for predictions of the future."
    },
    {
      title: "Feedback",
      description: "For feedback or suggestion on the bot, use the suggestion command or fill out the suggestion form here."
    }
  ];

  const upcomingFeatures = [
    {
      title: "Translation",
      description: "A translation command will be added for servers that have members of different languages!"
    },
    {
      title: "Tic-Tac-Toe vs. CPU",
      description: "Tic-Tac-Toe will be able to be played vs cpu in an upcoming update!"
    },
    {
      title: "Yahtzee",
      description: "Yahtzee will be added in a future update!"
    },
    {
      title: "Checkers",
      description: "Checkers will be added in a future update!"
    },
  ];

  useEffect(() => {
    getStatus();
  }, []);

  async function getStatus() {
    const onlineResponse = await fetch (api_link + '/api/logtime');
    const online = await onlineResponse.json();
    setBotStatus(online ? 'Online' : 'Offline');
  }

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards' style={{ width: 'calc(100vw - 12rem)' }}>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Bot Status</h3>
                    {botStatus ? <CiCloudOn className='card_icon'/> : <CiCloudOff className='card_icon'/>}
                </div>
                <h1>{botStatus}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Servers</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>4</h1>
            </div>
        </div>
        
        <div className='main-title'>
            <h3>Features</h3>
        </div>

        <FeaturesSection features={features}/>

        <div className='main-title'>
            <h3>Upcoming Features</h3>
        </div>

        <FeaturesSection features={upcomingFeatures}/>
    </main>
  )
}

export default Home