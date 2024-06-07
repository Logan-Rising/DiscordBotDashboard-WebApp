import React from 'react'
 import { GiFamilyTree } from "react-icons/gi"
 import { MdOutlineMessage } from "react-icons/md"
 import { RiSlashCommands2 } from "react-icons/ri"
 import { MdOutlineFeedback } from "react-icons/md";
 import { CiCircleInfo } from "react-icons/ci";
 import { Link } from 'react-router-dom'
 import logo from '../assets/logo.png';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img src={logo} style={{height: '20%', width: '15%', }}/> Sasquatch Bot
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list' >
            <Link to='/' style={{ textDecoration: 'none' }} onClick={{OpenSidebar}}>
                <li className='sidebar-list-item'>
                    <a href="">
                    <MdOutlineMessage className='icon'/> Dashboard
                    </a>
                </li>
            </Link>
            <Link to='/messaging' style={{ textDecoration: 'none' }} onClick={{OpenSidebar}}>
                <li className='sidebar-list-item'>
                    <a href="">
                    <MdOutlineMessage className='icon'/> Messaging
                    </a>
                </li>
            </Link>
            <Link to='/commands' style={{ textDecoration: 'none' }} onClick={{OpenSidebar}}>
                <li className='sidebar-list-item'>
                    <a href="">
                    <RiSlashCommands2 className='icon'/> Commands
                    </a>
                </li>
            </Link>
            <Link to='/genus' style={{ textDecoration: 'none' }} onClick={{OpenSidebar}}>
                <li className='sidebar-list-item'>
                    <a href="">
                    <GiFamilyTree className='icon'/> Genus
                    </a>
                </li>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }} onClick={{OpenSidebar}}>
                <li className='sidebar-list-item'>
                    <a href="">
                    <CiCircleInfo className='icon'/> About The Project
                    </a>
                </li>
            </Link>
            <Link to='/feedback' style={{ textDecoration: 'none' }} onClick={{OpenSidebar}}>
                <li className='sidebar-list-item'>
                    <a href="">
                    <MdOutlineFeedback className='icon'/> Feedback
                    </a>
                </li>
            </Link>
        </ul>
    </aside>
  )
}

export default Sidebar