import React from 'react'
import { useState } from "react";
import './Hero.css'
import Form from './Form'

const Hero = () => {
  // const [visible, setVisible] = useState(false)
  return (
    <section className="home" id='home'>
      <div className="video-container">
        <video src="assets/videos/tech.mp4" autoPlay muted id="video-bg"></video>
      </div>
      <div className="home-container">
        <div className="home-content">
          <div className='text-1'>Tech Hangout '22</div>
          <div className='text-2'>Tech O'Clock</div>
          <center><div className='text-3'>Join tech enthusiasts in ABUAD on May 14th for an inspiring day of technology and community.</div></center>
          <center style={{ display: "flex", justifyContent: "space-between", width: "50%" }}><a href="#about" className='tlink'>Learn More &gt;</a>
            <a href="#video" className='tlink'>Watch Video &gt;</a>
          </center>
          <center><a className='btn' href='#'>Book A Seat</a></center>
        </div>
      </div>
      {/* <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={() => {
                document.getElementById('modal-12').style.display = 'none'
              }
              }>&times;</span>
              <h2>Join Us</h2>
            </div>
            <div className="modal-body">
              <Form />
            </div>
          </div>
        </div>
      </div> */}

    </section>
  )
}
export default Hero

