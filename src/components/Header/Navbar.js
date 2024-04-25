import React from "react";
import logo from './../images/logo.png';
import search_icon from './../images/search_icon.svg';
import bell_icon from './../images/bell_icon.svg';
import profile from './../images/profile_img.png';
import crate from './../images/caret_icon.svg'
import './Navbar.css'
const Navbar = () => {
    return(
        <div className="navbars">
             
            <div className="container">
            <div className="navbars-menus">
                <div className="navbar-left">
                    <img src={logo}  alt="logo"/>
                    <ul>
                        <li>Home</li>
                        <li>Tv shows</li>
                        <li>Movies</li>
                        <li>New and popular</li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <img src={search_icon} alt="search-icon"/>
                    <p>Children</p>
                    <img src={bell_icon} alt="bell"/>
                    <div className="navbar-profile">
                        <img src={profile} alt="profile"/>
                        <img src={crate} alt="crate" />
                        <div className="drop-down">
                            <p>Sign Out of Netflix</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar;