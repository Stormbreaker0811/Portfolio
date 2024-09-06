import React from 'react'

function Navbar() {
    return (
    <div className='navbar'>
        <nav className='nav'>
            <div className="logo">
                <a href="/">Portfolio</a>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
