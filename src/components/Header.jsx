import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import { bot_invite_link, server_invite_link } from '../config'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
      <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
        </div>
        <div className='header-right'>
        <div className="button-container">
        <button className="button-21" onClick={() => window.open(server_invite_link, "_blank", "noreferrer")}>Join The Discord Server!</button>
        <button className="button-21" onClick={() => window.open(bot_invite_link, "_blank", "noreferrer")}>Invite The Bot To Your Server!</button>
        </div>
        </div>
        {/* <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div>
        <button className="button-21" onClick={() => window.open(server_invite_link, "_blank", "noreferrer")}>Join The Discord Server!</button>
        <button className="button-21" onClick={() => window.open(bot_invite_link, "_blank", "noreferrer")}>Invite The Bot To Your Server!</button>
        </div> */}
       
    </header>
  )
}

export default Header