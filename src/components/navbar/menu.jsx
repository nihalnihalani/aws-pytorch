import React from 'react';

import './menu.css';

const Navbar = props => (
    <header className="navbar">
        <nav className='Navigation'>
            <div></div>
            <div className="Navbar-Logo">
                <a  href="/">
                    Ai-Radiologist
                </a>
            </div>
            <div className='spacer'/>
                <div className="Navbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navbar;

