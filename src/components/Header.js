import React from 'react'
import { FaHome,FaBriefcase,FaList,FaAddressBook } from 'react-icons/fa';
import { BsPersonSquare } from 'react-icons/bs';



export default function Header() {
    return (
        <>      
<nav className="navbar" >
    <a href="/#"> <FaHome className="nav_icon"/><span>home</span> </a>
    <a href="/#about"><BsPersonSquare className="nav_icon" /><span>about</span> </a>
    <a href="/#work"><FaBriefcase className="nav_icon"/><span>My Work</span></a>
    <a href="/#"><FaList className="nav_icon"/><span>blogs</span> </a>
    <a href="/#contact"><FaAddressBook className ="nav_icon"/><span>contact</span> </a>
</nav>
        </>
    )
}
 