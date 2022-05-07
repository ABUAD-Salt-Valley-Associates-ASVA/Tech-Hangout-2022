import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai'
import { MdOutlineMessage } from 'react-icons/md'
import { IoMdMicrophone } from 'react-icons/io'
import { FaLaptopCode } from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ' '}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}><AiOutlineInfoCircle /></a>
            <a href="#speakers" onClick={() => setActiveNav('#speakers')} className={activeNav === '#speakers' ? 'active' : ' '}><IoMdMicrophone /></a>
            <a href="#amh" onClick={() => setActiveNav('#amh')} className={activeNav === '#amh' ? 'active' : ' '}><FaLaptopCode /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}><MdOutlineMessage /></a>
        </nav>
    )
}

export default Nav