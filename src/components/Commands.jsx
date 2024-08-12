import React from 'react'
import { useState, useEffect } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Pie, PieChart } 
 from 'recharts';
 import { api_link } from '../config';

function Commands() {
  const [data, setData] = useState([
    {
      name: 'General',
      Usage: 0,
    },
    {
      name: 'Game',
      Usage: 0,
    },
    {
      name: 'Image',
      Usage: 0,
    },
    {
      name: 'Admin',
      Usage: 0,
    },
    {
      name: 'Custom',
      Usage: 0,
    },
  ]);

  const [commandData, setCommandData] = useState();
  const [imageData, setImageData] = useState();
  const [commandsUsed, setCommandsUsed] = useState(0);
  const [commandsUsedToday, setCommandsUsedToday] = useState(0);
  const [generalCommandsUsed,setGeneralCommandsUsed] = useState(0);
  const [imageCommandsUsed,setImageCommandsUsed] = useState(0);
  const [gameCommandsUsed,setGameCommandsUsed] = useState(0);
  const [adminCommandsUsed,setAdminCommandsUsed]= useState(0);
  const [customCommandsUsed,setCustomCommandsUsed] = useState(0);

    useEffect(() => {
      FetchData();
    }, []);

    useEffect(() => {
      AnalyzeData();
    }, [imageData]);

    async function FetchData() {
      const commandsResponse = await fetch(api_link + '/api/commands');
      const commands = await commandsResponse.json();
      setCommandData(commands);

      const imageResponse = await fetch(api_link + '/api/image');
      const image = await imageResponse.json();
      setImageData(image);
    }

    async function AnalyzeData() {
      if (!commandData) {
        return;
      }
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
      }

      if (image.type === 'all') {
        image.daily = image.daily += imageData.dailyAll;
        image.total = image.total += imageData.all;
      } else {
        custom.index = custom.index + imageData.custom;
        custom.daily = custom.daily + imageData.dailyCustom;
      }

      setGeneralCommandsUsed(general.total);
      setAdminCommandsUsed(admin.total);
      setImageCommandsUsed(image.total);
      setCustomCommandsUsed(custom.index);
      setGameCommandsUsed(game.total);

      setCommandsUsed(general.total + game.total + image.total + admin.total + custom.index);
      setCommandsUsedToday(general.daily + game.daily + image.daily + admin.daily + custom.daily);

      setData(
        [
          {
            name: 'General',
            Usage: general.total,
          },
          {
            name: 'Game',
            Usage: game.total,
          },
          {
            name: 'Image',
            Usage: image.total,
          },
          {
            name: 'Admin',
            Usage: admin.total,
          },
          {
            name: 'Custom',
            Usage: custom.index,
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
            <div className='card'>
                <div className='card-inner'>
                    <h3>General Commands Used</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{generalCommandsUsed}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Game Commands Used</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{gameCommandsUsed}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Image Commands Used</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{imageCommandsUsed}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Admin Commands Used</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{adminCommandsUsed}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Custom Commands Used</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{customCommandsUsed}</h1>
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
                <Bar dataKey="Usage" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <PieChart width={400} height={400}>
              <Pie
                dataKey="Usage"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
              <Tooltip />
            </PieChart>

        </div>
    </main>
  )
}

export default Commands