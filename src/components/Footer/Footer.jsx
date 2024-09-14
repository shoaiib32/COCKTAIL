import React from 'react'
import './Footer.css'
import { FaFacebookF,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="first-container">
        <h1>About us</h1>
        <p>Thousands of brands from across the globe with their unique experience and flavors, all under one name- Living Liquidz. Founded in the year 1970, we are now the leading and one of the foremost family-owned brands in the country that provides alcohol delivery.</p> 
        <h1>Follow us</h1>
        <div className="icons">
        <FaInstagram />
        <FaFacebookF />
        </div>
      </div>

      <div className="mid-container">
        <h1>Living Liquidz</h1>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Buk Order</li>
          <li>Store Locator</li>
          <li>Important Links</li>
        </ul>
      </div>

      <div className="last-container">
        <h1>Useful Links</h1>
      <ul>
          <li>Privacy Policys</li>
          <li>Disclaimer</li>
          <li>Term Of Use</li>
          <li>Return Policy</li>
          <li>FAQs</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer


