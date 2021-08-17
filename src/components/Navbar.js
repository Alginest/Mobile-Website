import React from 'react'
import navData from '../data/navData'
import { FaArrowDown } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <nav>
          <div className='logo-cont'>
            <a href=''>LAVA</a>
          </div>
          <div className='links-cont'>
            <ul>
              {navData.map((link, index) => {
                const { text, url } = link
                return (
                  <li key={index}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
              <li className='more-info'>
                <p>
                  DROP DOWN <FaArrowDown className='drop-icon' />
                </p>
                <ul className='submenu'>
                  <li>
                    <a href=''>About Us</a>
                  </li>
                  <li>
                    <a href=''>Features</a>
                  </li>
                  <li>
                    <a href=''>Faq's</a>
                  </li>
                  <li>
                    <a href=''>Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className='hero-content'>
          <div className='hero-position'>
            <h1>Simple App that we</h1>
            <h2>Create</h2>
            <p>
              Lava HTML landing page template is provided by TemplateMo. You can
              modify and use it for your commercial websites for free of charge.
              This template is last updated on 29 Oct 2019.
            </p>
            <a href='#'>Know us better</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
