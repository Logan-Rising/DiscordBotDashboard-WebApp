import React from 'react'
import { useState, useEffect } from 'react'
import { MdError } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs';
import { api_link } from '../config';
import SearchBar from './SearchBar';
import Top5List from './Top5List';

function MyServer() {
    const [serverFound, setServerFound] = useState(false);
    const [last7DaysMessagesRead, setLast7DaysMessagesRead] = useState([
        {name: '', Messages_Read: 0, Average: 0},
        {name: '', Messages_Read: 0, Average: 0},
        {name: '', Messages_Read: 0, Average: 0},
        {name: '', Messages_Read: 0, Average: 0},
        {name: '', Messages_Read: 0, Average: 0},
        {name: '', Messages_Read: 0, Average: 0},
        {name: '', Messages_Read: 0, Average: 0},
      ]);
      const [last7DaysCommands, setLast7DaysCommands] = useState([
        {name: '', Commands: 0, Average: 0},
        {name: '', Commands: 0, Average: 0},
        {name: '', Commands: 0, Average: 0},
        {name: '', Commands: 0, Average: 0},
        {name: '', Commands: 0, Average: 0},
        {name: '', Commands: 0, Average: 0},
        {name: '', Commands: 0, Average: 0},
      ]);
      const [topList, setTopList] = useState(['', '', '', '', '']);
      const [topUserList, setTopUserList] = useState(['', '', '', '', '']);
      const [channelList, setChannelList] = useState({});
      const [userList, setUserList] = useState({});
      const [serverData, setServerData] = useState(0);
      const [errorMessage, setErrorMessage] = useState();
      const [commandsToday, setCommandsToday] = useState(0);
      const [filteredMessages, setFilteredMessages] = useState(0);
      const [messagesToday, setMessagesToday] = useState(0);
      const [serverName, setServerName] = useState('');

  useEffect(() => {
    AnalyzeData();
  }, [serverData]);

  useEffect(() => {
    GetTop5Channels();
  }, [channelList]);

  useEffect(() => {
    GetTop5Users();
  }, [userList]);

  // Fetch data from the API
  async function FetchData(serverId) {
    try {
        const apiResponse = await fetch(api_link + '/api/servers/' + serverId);
        const serverInfo = await apiResponse.json();
        setServerData(serverInfo);
        setServerFound(true);
    } catch (error) {
        setErrorMessage('Invalid server id. Make sure the id is correct and Sasquatch Bot is in your server!');
    }
  }

  // Analyze the server data from the API
  async function AnalyzeData() {
    for (const key in serverData) {
        switch (key) {
            case 'commands_today': 
                setCommandsToday(serverData[key]);
                break;
            case 'filtered_messages':
                setFilteredMessages(serverData[key]);
                break;
            case 'today_channels':
                let totalMessages = 0;
                for (const key2 in serverData[key]) {
                    totalMessages += serverData[key][key2];
                }
                setMessagesToday(totalMessages);
                break;
            case 'last_7_days_commands': 
                let tempCommands = last7DaysCommands;
                let revIndex = 0;
                for ( let i = serverData[key].length - 1; i >= 0; i-- ) {
                    tempCommands[revIndex].Commands = serverData[key][i];
                    revIndex++;
                }
                setLast7DaysCommands(tempCommands);
                break;
            case 'last_7_days_channels':    // Set messages read in the server over the last 7 days
                let channels = {};
                let temp = last7DaysMessagesRead;
                let reverseIndex = 0;
                let avg = 0;
                for ( let i = serverData[key].length - 1; i >= 0; i--) {
                    let count = 0;
                    for (const key2 in serverData[key][i]) {
                        channels[key2] ? channels[key2] = channels[key2] += serverData[key][i][key2] : channels[key2] = serverData[key][i][key2];
                        count += serverData[key][i][key2];
                    }
                    temp[reverseIndex].Messages_Read = count;
                    avg += count;
                    count = 0;
                    reverseIndex++;
                }
                avg = Math.floor(avg/7);
                for ( let i = 0; i < 7; i++ ) {
                    temp[i].Average = avg;
                }
                setLast7DaysMessagesRead(temp);
                setChannelList(channels);
                break;
            case 'server_name':
                setServerName(serverData[key]);
                break;
            case 'last_7_days_members':
                let members = {};
                for ( let i = serverData[key].length - 1; i >= 0; i--) {
                    for (const key2 in serverData[key][i]) {
                        members[key2] ? members[key2] = members[key2] += serverData[key][i][key2] : members[key2] = serverData[key][i][key2];
                    }
                }
                setUserList(members);
                break;
        }
    }
  }

  function GetTop5Channels() {
    const top5Values = Object.values(channelList).sort((a,b) => b-a).slice(0,5);
    const top5Keys = Object.keys(channelList).sort((a,b) => channelList[b]- channelList[a]).slice(0,5);
    let top5List = [];

    for ( let i = 0; i < 5; i++ ){
        top5Keys[i] ? top5List.push(serverData.channels[top5Keys[i]] + ': ' + top5Values[i]) : top5List.push('N/A');
    }

    setTopList(top5List);
  }

  function GetTop5Users() {
    const top5Values = Object.values(userList).sort((a,b) => b-a).slice(0,5);
    const top5Keys = Object.keys(userList).sort((a,b) => userList[b]- userList[a]).slice(0,5);
    let top5List = [];

    for ( let i = 0; i < 5; i++ ){
        top5Keys[i] ? top5List.push(serverData.members[top5Keys[i]] + ': ' + top5Values[i]) : top5List.push('N/A');
    }

    setTopUserList(top5List);
  }

  const handleSearch = (query) => {
    setErrorMessage();
    FetchData(query);
  };

  return (
    <main className='main-container'>
        <SearchBar onSearch={handleSearch} placeholder={'Enter Your Server Id Here...'} infoTextParam={'Your server id can be found via Discord with "Developer Mode" turned on.'}/>
        {errorMessage && !serverFound ? <div className='error'>
            <MdError />
            <h3>{errorMessage}</h3>
        </div> : <div></div>}
        {serverFound ?
        <div>
            <div className='main-title'>
            <h1>{serverName}</h1>
            </div> 
            <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Messages Read Today</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{messagesToday}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Commands Used Today</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{commandsToday}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Filtered Messages</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{filteredMessages}</h1>
            </div>
            </div>
        <div className='main-title'>
            <h3>Statistics For Your Server Over The Last 7 Days</h3>
        </div> 
        <div className='sbs'>
            <div className='sbs-item'><Top5List title={'Top 5 Channels'}items={topList}/></div>
            <div className='sbs-item'><Top5List title={'Top 5 Users'}items={topUserList}/></div>
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
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={last7DaysCommands}
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
                <Line type="monotone" dataKey="Commands" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Average" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
        </div>
        
        : <div></div>
        }
    </main>
  )
}

export default MyServer