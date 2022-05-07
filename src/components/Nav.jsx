import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai'
import { MdOutlineMessage } from 'react-icons/md'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { SiHackaday } from 'react-icons/si'
import { useState } from 'react'
import ScrollSpy from "react-ui-scrollspy";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            {/* <ScrollSpy items={['home', 'about', 'team', 'blog', 'contact']} currentClassName="is-current" onUpdate={(activeNav) => setActiveNav(activeNav)}> */}
            <a data-to-scrollspy-id='home' href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ' '}><AiOutlineHome /></a>
            <a data-to-scrollspy-id='about' href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}><AiOutlineInfoCircle /></a>
            <a data-to-scrollspy-id='speakers' href="#speakers" onClick={() => setActiveNav('#speakers')} className={activeNav === '#speakers' ? 'active' : ' '}><FaChalkboardTeacher /></a>
            <a data-to-scrollspy-id='amh' href="#amh" onClick={() => setActiveNav('#amh')} className={activeNav === '#amh' ? 'active' : ' '}><SiHackaday /></a>
            <a data-to-scrollspy-id='contact' href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}><MdOutlineMessage /></a>
        </nav>
    )
}

export default Nav