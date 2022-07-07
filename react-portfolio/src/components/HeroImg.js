import "./HeroImgStyles.css";
import IntroHero from "../assets/images/Dreamy Beach.jpg"
import React from 'react'
import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src={IntroHero} alt="beach sunset"/>
        <div className="content">
        <p>Hi, Welcome to my Universe</p>
        <h1>Software Engineer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
        </div>
        </div>
     </div>
  )
}

export default HeroImg