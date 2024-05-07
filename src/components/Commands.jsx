import React from 'react'
import { useState, useEffect } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Commands(commandInfo) {
  const [data, setData] = useState([
    {
      name: 'General',
      Command: 0,
    },
    {
      name: 'Game',
      Command: 0,
    },
    {
      name: 'Image',
      Command: 0,
    },
    {
      name: 'Admin',
      Command: 0,
    },
    {
      name: 'Custom',
      Command: 0,
    },
  ]);

  const [commandsUsed, setCommandsUsed] = useState(0);
  const [commandsUsedToday, setCommandsUsedToday] = useState(0);

    useEffect(() => {
      analyzeData();
    }, []);

    async function analyzeData() {
      const commandData = commandInfo.commandInfo;

      let general = {
        total: 0,
        daily: 0,
        array: [],
      }
    
      let game = {
        total: 0,
        daily: 0,
        array: [],
      }
    
      let image = {
        total: 0,
        daily: 0,
        array: [],
      }
    
      let admin = {
        total: 0,
        daily: 0,
        array: [],
      }
    
      let custom;

      for (let i = 0; i < commandData.length; i++) {
        if (commandData[i].type === 'general') {
          general.daily = general.daily += commandData[i].daily;
          general.total = general.total += commandData[i].index;
          general.array.push(commandData[i]);
        } else if (commandData[i].type === 'game') {
          game.daily = game.daily += commandData[i].daily;
          game.total = game.total += commandData[i].index;
          game.array.push(commandData[i]);
        } else if (commandData[i].type === 'image') {
          image.daily = image.daily += commandData[i].daily;
          image.total = image.total += commandData[i].index;
          image.array.push(commandData[i]);
        } else if (commandData[i].type === 'admin') {
          admin.daily = admin.daily += commandData[i].daily;
          admin.total = admin.total += commandData[i].index;
          admin.array.push(commandData[i]);
        } else if (commandData[i].type === 'custom') {
          custom = commandData[i];
        }

        setCommandsUsed(commandsUsed + commandData[i].index);
        setCommandsUsedToday(commandsUsedToday + commandData[i].daily);
      }

      const imageData = commandInfo.imageInfo[0];
      image.daily = image.daily += imageData.daily;
      image.total = image.total += imageData.total;

      setData(
        [
          {
            name: 'General',
            Command: general.total,
          },
          {
            name: 'Game',
            Command: game.total,
          },
          {
            name: 'Image',
            Command: image.total,
          },
          {
            name: 'Admin',
            Command: admin.total,
          },
          {
            name: 'Custom',
            Command: custom.index,
          },
        ]
      ) 
    }
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>COMMANDS</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Commands Used</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{commandsUsed}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Commands Used Today</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{commandsUsedToday}</h1>
            </div>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Commands Used</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{commandsUsed}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Commands Used Today</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{commandsUsedToday}</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
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
                <Bar dataKey="Command" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
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
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Commands