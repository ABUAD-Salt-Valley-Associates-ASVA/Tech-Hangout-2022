import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai'
import { MdOutlineMessage } from 'react-icons/md'
import { GiPublicSpeaker } from 'react-icons/gi'
import { FaLaptopCode } from 'react-icons/fa'
import { useState } from 'react'
import Scrollspy from "react-scrollspy";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <Scrollspy items={['home', 'about', 'speakers', 'amh', 'contact']} componentTag="nav" currentClassName="active">
            <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ' '}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}><AiOutlineInfoCircle /></a>
            <a href="#speakers" onClick={() => setActiveNav('#speakers')} className={activeNav === '#speakers' ? 'active' : ' '}><GiPublicSpeaker /></a>
            <a href="#amh" onClick={() => setActiveNav('#amh')} className={activeNav === '#amh' ? 'active' : ' '}><FaLaptopCode /></a>
            <a data-to-scrollspy-id='contact' href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}><MdOutlineMessage /></a>
        </Scrollspy>

    )
}

export default Nav