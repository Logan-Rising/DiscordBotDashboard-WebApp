import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { GiFamilyTree } from "react-icons/gi"
 import { MdOutlineMessage } from "react-icons/md"
 import { RiSlashCommands2 } from "react-icons/ri"
 import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Sasquatch Bot
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list' >
            <Link to='/' style={{ textDecoration: 'none' }}>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </a>
                </li>
            </Link>
            <Link to='/messages' style={{ textDecoration: 'none' }}>
                <li className='sidebar-list-item'>
                    <a href="">
                    <MdOutlineMessage className='icon'/> Messaging
                    </a>
                </li>
            </Link>
            <Link to='/commands' style={{ textDecoration: 'none' }}>
                <li className='sidebar-list-item'>
                    <a href="">
                    <RiSlashCommands2 className='icon'/> Commands
                    </a>
                </li>
            </Link>
            <Link to='/genus' style={{ textDecoration: 'none' }}>
                <li className='sidebar-list-item'>
                    <a href="">
                    <GiFamilyTree className='icon'/> Genus
                    </a>
                </li>
            </Link>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> ...
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> ...
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar