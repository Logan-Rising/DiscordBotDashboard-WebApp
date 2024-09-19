import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable';
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Messaging from './components/Messaging'
import Commands from './components/Commands'
import Feedback from './components/Feedback'
import Genus from './components/Genus'
import AboutThisProject from './components/About'
import CommandDocs from './components/CommandDocs'
import MyServer from './components/MyServer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Tos from './components/Tos';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => setOpenSidebarToggle(false),
    onSwipedRight: () => setOpenSidebarToggle(true),
  });

  return (
    <div {...handlers} className='grid-container'>
      <HashRouter>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Header OpenSidebar={OpenSidebar}/>
        <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/myserver' element={<MyServer/>} />
              <Route path='/commanddocs' element={<CommandDocs/>}/>
              <Route path='/messaging' element={<Messaging/>} />
              <Route path='/commands' element={<Commands/>} />
              <Route path='/genus' element={<Genus/>} />
              <Route path='/about' element={<AboutThisProject/>} />
              <Route path='/feedback' element={<Feedback/>} />
              <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
              <Route path='/tos' element={<Tos/>} />
          </Routes>
      </HashRouter>
    </div>
  )
}

export default App
