import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
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

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    console.log('OpenSidebar called')
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <HashRouter>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Header OpenSidebar={OpenSidebar}/>
        <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/commanddocs' element={<CommandDocs/>}/>
              <Route path='/messaging' element={<Messaging/>} />
              <Route path='/commands' element={<Commands/>} />
              <Route path='/genus' element={<Genus/>} />
              <Route path='/about' element={<AboutThisProject/>} />
              <Route path='/feedback' element={<Feedback/>} />
          </Routes>
      </HashRouter>
    </div>
  )
}

export default App
