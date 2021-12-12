import React from 'react'
import { FaHome,FaBriefcase,FaList,FaAddressBook } from 'react-icons/fa';
import { BsPersonSquare } from 'react-icons/bs';



export default function Header() {
    return (
        <>      
<nav className="navbar" >
    <a href="/#" className='nav_link'> <FaHome className="nav_icon"/><span>home</span> </a>
    <a href="/#about" className='nav_link'><BsPersonSquare className="nav_icon" /><span>about</span> </a>
    <a href="/#work" className='nav_link'><FaBriefcase className="nav_icon"/><span>My Work</span></a>
    <a href="/#blog" className='nav_link'><FaList className="nav_icon"/><span>blogs</span> </a>
    <a href="/#contact" className='nav_link'><FaAddressBook className ="nav_icon"/><span>contact</span> </a>
</nav>
        </>
    )
}
 