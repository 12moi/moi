import React from "react";
import '../App.css'
import {BsInstagram} from 'react-icons/bs'
import {GrTwitter} from 'react-icons/gr'

export default function Footer() {
  return (
    
    <footer>
    <a href='' className='footer__logo'>MOI</a>
    <ul className='pernalinks'>
      {/* <li><a href='#'>Home</a></li> */}
      <li><a href='#about'>About</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__social'>
      
      <a href='https://twitter.com'><GrTwitter/></a>
      <a href='https://instagram.com'><BsInstagram/></a>
      
    </div>
    <div className='footer__copyright'>
      <small>
        &copy; MOI. All rights reserved
      </small>
    </div>
  </footer>
  );
}