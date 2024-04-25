import React from "react";
import './Banner.css';
import banner_img from './../images/hero_banner.jpg';
import hero_title from './../images/hero_title.png';
import play_icon from './../images/play_icon.png';
import infro_icon from './../images/info_icon.png';
import Cards from "../Cards/Cards";
const Banner = () => {
    return(
        <div className="banner-section">
            <img src={banner_img} alt="banner" className="banner-img"/> 
            <div className="banner-caption">
                <img src={hero_title} alt="hero" className="hero-img"/>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            <div className="banner-play">
                <button className='play-btn'><img src={play_icon} alt="play-icon"/>Play</button>
                <button className='info-btn'><img src={infro_icon} alt="info-icon"/>More Info</button>
            </div>
            <Cards/>
            </div>
        </div>
    )
}

export default Banner;