import React from 'react'
import { useState } from 'react'
import './About.css'
import Modal from './Modal';

const About = () => {
  const [visible, setVisible] = useState(false)
  return (
    <section className='about' id='about'>
      <div className='about-cont'>
        <h2 className='title'>
          ABOUT
        </h2>
        <div className='about-content'>
          <div className='text'>
            TECH <span className='hang'>HANGOUT '22</span>
          </div>
          <p>
            We started in the year 2021 to teach individuals the latest in the technological space with the use of <a className="tlink"> 3D PRINTING </a> to <a className="tlink"> MICROCONTROLLER programming</a> and connect them with individuals deeply rooted in the industry.
            This year 2022, we improve as the technology changes and call on tech experts, amateurs and novices aiming to build a network amongst
            individuals who want to improve themselves in the industry with full expression without prejudice.<br /><br /> This year will have a lot planned for you, from a <a className="tlink">HACKATHON</a> to Project Exhibition to Lectures that will BLOW YOUR MIND and GIVEAWAYS. All you have to do is BOOK A SEAT, COME WITH AN OPEN MIND and watch how your world completely changed for the best.
          </p>
          <center><a className='btn' href='#' onClick={() => setVisible(true)}>Book A Seat</a></center>
        </div>
      </div>
      <Modal visible={visible} setVisible={setVisible} />
    </section >
  )
}

export default About