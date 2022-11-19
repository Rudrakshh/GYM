import React,{useState} from 'react';
import logo from "../images/logo.png"

import {Link} from 'react-scroll'

function Navbar() {

    const [nav,setnav]=useState(false);
    const changebackground = ()=>{
        if(window.screenY>50){
            setnav(true)
        }
        else{
            setnav(false)
        }
    }
    window.addEventListener('scroll',changebackground)
    return(
        <nav className={nav ? 'nav active':'nav'}>
            <Link to='main' className='logo' smooth={true} duration='1000ms'>
                <img src={logo} alt='not found' />
            </Link>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main'smooth={true} duration='1000ms'>HEADER</Link></li>
                <li><Link to='features' smooth={true} duration='1000ms'>FEATURE</Link></li>
                <li><Link to='presentaion' smooth={true} duration='1000ms'>OFFER</Link></li>
                <li><Link to='about' smooth={true} duration='1000ms'>ABOUT</Link></li>
                <li><Link to='contact' smooth={true} duration='1000ms'>CONTACT</Link></li>
            </ul>
                

            
        </nav>
    )
}

export default Navbar;

