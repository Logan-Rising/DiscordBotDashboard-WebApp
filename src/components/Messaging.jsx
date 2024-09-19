import React from 'react'
import { useState, useEffect } from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { api_link } from '../config';

function Messaging() {
  const [messageData, setMessageData] = useState(0);
  const [past7DaysMessageData, setPast7DaysMessageData] = useState();
  const [messagesRead, setMessagesRead] = useState(0);
  const [messagesSent, setMessagesSent] = useState(0);
  const [messagesDeleted, setMessagesDeleted] = useState(0);
  const [interactionsRecieved, setInteractionsRecieved] = useState(0);
  const [reactionsCollected, setReactionsCollected] = useState(0);
  const [last7DaysMessagesRead, setLast7DaysMessagesRead] = useState([
    {name: '', Messages_Read: 0, Average: 0},
    {name: '', Messages_Read: 0, Average: 0},
    {name: '', Messages_Read: 0, Average: 0},
    {name: '', Messages_Read: 0, Average: 0},
    {name: '', Messages_Read: 0, Average: 0},
    {name: '', Messages_Read: 0, Average: 0},
    {name: '', Messages_Read: 0, Average: 0},
  ]);

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    AnalyzeData();
  }, [messageData]);

  useEffect(() => {
    AnalyzePast7DaysData();
  }, [past7DaysMessageData]);

  // Fetch data from the API
  async function FetchData() {
    const messagingResponse = await fetch(api_link + '/api/messaging');
    const messaging = await messagingResponse.json();
    setMessageData(messaging);

    const last7DaysMessagingResponse = await fetch(api_link + '/api/last7days/messaging');
    const last7DaysMessaging = await last7DaysMessagingResponse.json();
    setPast7DaysMessageData(last7DaysMessaging);
  }

  // Analyze the data from the API for total messaging data
  async function AnalyzeData() {
    for(let i = 0; i < messageData.length; i++) {
      if (messageData[i].name === 'messages_read') {
        setMessagesRead(messageData[i].index);
      } else if (messageData[i].name === 'messages_sent') {
        setMessagesSent(messageData[i].index);
      } else if (messageData[i].name === 'messages_deleted') {
        setMessagesDeleted(messageData[i].index);
      } else if (messageData[i].name === 'interactions_received') {
        setInteractionsRecieved(messageData[i].index);
      } else if (messageData[i].name === 'reaction_collections') {
        setReactionsCollected(messageData[i].index);
      }
    }
  }

  // Analyze past 7 days of messaging data from the API
  async function AnalyzePast7DaysData() {
    if (!past7DaysMessageData) {
      return;
    }
    const today = new Date();
    let messagesReadPast7Days = [];
    let total = 0;
    let average = 0;

    for(let i = 6; i >= 0; i--) {
      const priorDate = new Date(new Date().setDate(today.getDate() - ( i + 1 )))
          .toISOString().slice(0, 10);
      const count = past7DaysMessageData[i] == null ? 0 : past7DaysMessageData[i].messages_read.index;
        messagesReadPast7Days.push( {
          name: priorDate.substring(priorDate.indexOf('-')+1),
          Messages_Read: count,
      });
      total += count;
    }

    average = Math.floor(total / 7);

    for (let i = 0; i < messagesReadPast7Days.length; i++) {
      messagesReadPast7Days[i].Average = average;
    }

    console.log(messagesReadPast7Days)
    setLast7DaysMessagesRead(messagesReadPast7Days);
  }

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Messaging</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Messages Read</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{messagesRead}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Messages Sent</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{messagesSent}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Messages Deleted</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{messagesDeleted}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Interactions Recieved</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{interactionsRecieved}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Reactions Collected</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{reactionsCollected}</h1>
            </div>
        </div>

        <div className='main-title'>
            <h3>Messages Read Over The Last 7 Days</h3>
        </div>
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={last7DaysMessagesRead}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Messages_Read" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Average" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </main>
  )
}

export default Messaging