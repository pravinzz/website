import React, { useState } from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Row, Col } from 'antd';
import { SidebarData } from '../Profile-menu/SidebarData';
import { Divider, Radio, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './Navbar.scss';





const Navbar = () => {




    return (
        <div>
            <nav className='navbar'>
                <ul className='nav-links'>
                    <Link to='/home' className='home'>
                        <li >Home</li>
                    </Link>
                    <Link to='/about' className='about'>
                        <li >About</li>
                    </Link>
                    <Link to='/skills' className='skills'>
                        <li >Products</li>
                    </Link>
                    <Link to='/contact' className='contact'>
                        <li >Contact</li>
                    </Link>
                </ul>
            </nav>
            <hr className='horizontalline-nav' />
        </div>
    )
}

export default Navbar;
