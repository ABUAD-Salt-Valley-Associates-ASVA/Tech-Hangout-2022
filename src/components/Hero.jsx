import React from 'react'
import { useState } from "react";
import './Hero.css'
import Modal from './Modal';
import Social from './Social'

const Hero = () => {
  const [visible, setVisible] = useState(false)
  return (
    <section className="home" id='home'>

      <div className="video-container">
        <video src="assets/videos/tech.mp4" autoPlay muted id="video-bg"></video>
      </div>
      <div className="home-container">
        <div className='logo'>
          <a href="#">
            <span>
              <img src={require('./../assets/images/logo192.png')} alt='logo' />
            </span>
          </a>
        </div>
        <div className="home-content">
          <div className='text-1'>Tech Hangout '22</div>
          <div className='text-2'>Tech O'Clock</div>
          <center><div className='text-3'>Join tech enthusiasts in ABUAD on May 14th for an inspiring day of technology and community.</div></center>
          <center style={{ display: "flex", justifyContent: "space-between", width: "50%" }}><a href="#about" className='tlink'>Learn More &gt;</a>
            <a href="#video" className='tlink'>Watch Video &gt;</a>
          </center>
          <center><a className='btn' href='#' onClick={() => setVisible(true)}>Book A Seat</a></center>
        </div>
        <Social />
      </div>

      <Modal visible={visible} setVisible={setVisible} />
    </section>
  )
}
export default Hero

