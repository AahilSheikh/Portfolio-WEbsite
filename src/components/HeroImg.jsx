import "./HeroImgStyle.css";

import React from 'react'
import IntroImg from "../asets/developerimg1.png"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
      <img className="into-img"
      src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" 
          className="btn">Projects</Link>

<Link to="/contact" 
          className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg