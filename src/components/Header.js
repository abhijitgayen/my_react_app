import React from 'react'

export default function Header() {
    return (
        <>      
<nav className="navbar" >
    <a href="/#" className="active"> <i className="fa fa-home"></i> <span>home</span> </a>
    <a href="/#"> <i className="fa fa-user"></i> <span>about</span> </a>
    <a href="/#"> <i className="fa fa-briefcase"></i> <span>portfolio</span></a>
    <a href="/#"> <i className="fa fa-list"></i> <span>blogs</span> </a>
    <a href="/#"> <i className="fa fa-address-book"></i> <span>contact</span> </a>
</nav>
        </>
    )
}
 