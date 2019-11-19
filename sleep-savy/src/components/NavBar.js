import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function NavBar() {
    return (
        <div className='navBar'>
            <img src={logo} alt='logo' />
            <div className='links'>
                <Link className='link'>Home</Link>
                <Link className='link'>Sleep Entries</Link>
                <Link className='link'>Login</Link>
                <Link className='link'>Registration</Link>
            </div>
        </div>
    )
}

export default NavBar