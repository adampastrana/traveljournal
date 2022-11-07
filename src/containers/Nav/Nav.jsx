 
import React from 'react';
import './nav.css';
import Logo from '../../assets/logo.png';
 
export default function Nav() {
    return (
            <nav className="nav"> 
                <img src={Logo} alt="" className="logo"/>
                <h2>my travel journal.</h2>
            </nav>  
    )
}