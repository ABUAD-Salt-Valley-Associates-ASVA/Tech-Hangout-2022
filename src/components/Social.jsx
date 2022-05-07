import React from 'react'
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './Social.css'

const Social = () => {
  return (
    <div className="header__socials">
      <a href='https://www.linkedin.com/company/abuad-salt-valley-associates-asva/' target="blank" ><BsLinkedin color="var(--color)" size="25px" /></a>
      {/* <a href=""><FaGithub color="var(--color)" size="25px" /></a> */}
      <a href='https://twitter.com/asva__' target="blank"><BsTwitter color="var(--color)" size="25px" /></a>
      <a href='https://www.instagram.com/a.s.v.a__/' target="blank"><BsInstagram color="var(--color)" size="25px" /></a>
    </div>
  )
}

export default Social