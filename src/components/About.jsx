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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat dui. Donec pharetra magna id tortor euismod sagittis. Maecenas accumsan tellus at mollis dictum. Pellentesque ornare efficitur dapibus. Cras et tellus turpis. Sed rutrum, mi sit amet ultricies commodo, dolor lacus imperdiet enim, non hendrerit augue ex vitae purus. Praesent sit amet blandit ex. Nulla porta elit eget commodo vulputate. Donec eget augue dictum, euismod est ac, sodales tortor. Suspendisse a fringilla tortor. Proin vestibulum elementum dui. Aliquam lacinia eget erat et sollicitudin. Vestibulum eu lorem vel quam pharetra dignissim eget sed augue. Aliquam mauris metus, commodo consectetur congue sit amet, suscipit id sapien. Nunc hendrerit, erat at tincidunt fringilla, urna magna hendrerit ante, et viverra enim felis vel mi.
          </p>
          <center><a className='btn' href='#' onClick={() => setVisible(true)}>Book A Seat</a></center>
        </div>
      </div>
      <Modal visible={visible} setVisible={setVisible} />
    </section >
  )
}

export default About