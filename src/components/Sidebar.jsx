import React from 'react'
 import { GiFamilyTree } from "react-icons/gi"
 import { MdOutlineMessage } from "react-icons/md"
 import { RiSlashCommands2 } from "react-icons/ri"
 import { MdOutlineFeedback } from "react-icons/md";
 import { CiCircleInfo } from "react-icons/ci";
 import { HiOutlineCommandLine } from "react-icons/hi2";
 import { LuLayoutDashboard } from "react-icons/lu";
 import { Link } from 'react-router-dom'
 import logo from '../assets/logo.png';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img src={logo} style={{height: '20%', width: '15%', }}/> Sasquatch Bot
            </div>
            <span className='icon close_icon' onClick={openSidebarToggle ? OpenSidebar : undefined}>X</span>
        </div>

        <ul className='sidebar-list' >
            <Link to='/' style={{ textDecoration: 'none' }} onClick={openSidebarToggle ? OpenSidebar : undefined}>
                <li className='sidebar-list-item'>
                    <a>
                    <LuLayoutDashboard className='icon'/> Dashboard
                    </a>
                </li>
            </Link>
            <Link to='/commanddocs' style={{ textDecoration: 'none' }} onClick={openSidebarToggle ? OpenSidebar : undefined}>
                <li className='sidebar-list-item'>
                    <a>
                    <HiOutlineCommandLine className='icon'/> Commands
                    </a>
                </li>
            </Link>
            <Link to='/messaging' style={{ textDecoration: 'none' }} onClick={openSidebarToggle ? OpenSidebar : undefined}>
                <li className='sidebar-list-item'>
                    <a>
                    <MdOutlineMessage className='icon'/> Messaging Data
                    </a>
                </li>
            </Link>
            <Link to='/commands' style={{ textDecoration: 'none' }} onClick={openSidebarToggle ? OpenSidebar : undefined}>
                <li className='sidebar-list-item'>
                    <a>
                    <RiSlashCommands2 className='icon'/> Command Data
                    </a>
                </li>
            </Link>
            <Link to='/genus' style={{ textDecoration: 'none' }} onClick={openSidebarToggle ? OpenSidebar : undefined}>
                <li className='sidebar-list-item'>
                    <a>
                    <GiFamilyTree className='icon'/> Genus
                    </a>
                </li>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }} onClick={openSidebarToggle ? OpenSidebar : undefined}>
                <li className='sidebar-list-item'>
                    <a>
                    <CiCircleInfo className='icon'/> About The Project
                    </a>
                </li>
            </Link>
            <Link to='/feedback' style={{ textDecoration: 'none' }} onClick={openSidebarToggle ? OpenSidebar : undefined}>
                <li className='sidebar-list-item'>
                    <a>
                    <MdOutlineFeedback className='icon'/> Feedback
                    </a>
                </li>
            </Link>
            
        </ul>
    </aside>
  )
}

export default Sidebar