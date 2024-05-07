import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Messaging from './components/Messaging'
import Commands from './components/Commands'
import { api_link } from './config'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const [commandInfo, setCommandInfo] = useState();
  const [imageInfo, setImageInfo] = useState();

  useEffect(() => {
    console.log('fetching data');
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(imageInfo);
  // }, [imageInfo]);
  // useEffect(() => {
  //   console.log(commandInfo);
  // }, [commandInfo]);

  async function fetchData() {
    const commandsResponse = await fetch(api_link + '/api/commands');
    const commands = await commandsResponse.json();
    setCommandInfo(commands);

    const imageResponse = await fetch(api_link + '/api/image');
    const image = await imageResponse.json();
    console.log('setting image info')
    setImageInfo(image);

    // const messagingResponse = await fetch(api_link + '/api/messaging');
    // const messaging = await messagingResponse.json();
  }

  return (
    <div className='grid-container'>
      <BrowserRouter>
        <Sidebar/>
        <Header/>
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/messages' element={<Messaging/>} />
              <Route path='/commands' element={<Commands commandInfo={commandInfo} imageInfo={imageInfo}/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
