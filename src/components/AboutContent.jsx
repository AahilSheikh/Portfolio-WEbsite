import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import react4 from "../asets/react4.jpg"
import react2 from "../asets/react2.png"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react Front-end Developer.I create responsive secure website for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react4} className="img" alt="True"/>
                </div>

                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="True"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent