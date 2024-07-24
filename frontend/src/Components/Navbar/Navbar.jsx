import React from 'react'

function Navbar() {
    return (
    <div className='fixed navbar shadow-md bg-navbar text-text-color'>
        <div className='flex-1'>
            <a className='btn btn-ghost text-xl font-Ubuntu font-medium'>Nimish Godbole Portfolio</a>
        </div>
        <div className='flex-none justify-center text-center text-xl font-Ubuntu font-medium'>
            <ul className='menu menu-horizontal px-2'>
                <li><a href='/about-me'>About Me</a></li>
                <li><a href='#projects'>My Projects</a></li>
                <li><a href='/contact-me'>Contact Me</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar
