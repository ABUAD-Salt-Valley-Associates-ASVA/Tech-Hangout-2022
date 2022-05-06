import React from 'react'
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './Social.css'

const Social = () => {
  return (
    <div className="header__socials">
      <a href=""><BsLinkedin color="white" size="25px" /></a>
      <a href=""><FaGithub color="white" size="25px" /></a>
      <a href=""><BsTwitter color="white" size="25px" /></a>
      <a href=""><BsInstagram color="white" size="25px" /></a>
    </div>
  )
}

export default Social