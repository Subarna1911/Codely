import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className="footer section-padding">
      <ContentWrapper>
        <ul className="footer-list">
          <li className="footer-item">Terms of use</li>
          <li className="footer-item">Privacy-Policy</li>
          <li className="footer-item">About</li>
          <li className="footer-item">Blog</li>
          <li className="footer-item">FAQ</li>
        </ul>
        <div className="footer-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa commodi assumenda doloremque tenetur dignissimos vitae architecto est, nam quo expedita natus sapiente quasi maiores id maxime odio dolorum eum quaerat consequatur aliquam possimus laudantium. Doloremque unde rerum exercitationem, accusantium blanditiis amet porro soluta aliquid maiores?</div>

        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>

    </footer>
    </>
  )
}

export default Footer
