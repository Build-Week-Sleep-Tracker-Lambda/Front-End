import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function NavBar() {
    return (
        <div className='navBarSignUp'>
            <img src={logo} alt='logo' />
            <div className='linksSignUp'>
                <Link className='linkSignUp'>Home</Link>
                <Link className='linkSignUp'>Sleep Entries</Link>
                <Link className='linkSignUp'>Login</Link>
                <Link className='linkSignUp'>Registration</Link>
            </div>
        </div>
    )
}

export default NavBar