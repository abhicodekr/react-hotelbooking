import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>We prowide comfortable rooms and suites overlook lush gardens with
              panoramic views of the Arenal Volcano. The hotel features a
              splendid outdoor swimming pool in addition to satellite TV, air
              conditioning, and free WiFi. The Villas located only 0.6 miles
              from where you stay at our hotel, and just a short drive from
              airport.</p>
            <br />
            <p>your amaze and feel incredible booking at this website.
              happy journey</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>We are selected as the best hotel booking parteners in the worlds</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2022</span>
              </li>
              <li>
                <p>Our team is participated in the International hotel summet in New Yourk</p>
                <label className='fa fa-calendar-alt'></label>
                <span>12 Aug 2021</span>
              </li>
              <li>
                <p>We are updating our site policy and terms condintion please update with us.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>25 Jan 2020</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>Hotels are the place where our coustomers are feels good and respect our values so review our website and select the best destination hotels.</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2022 All Rights Reserved. Abhishek Kumar !!</p>
      </div>
    </>
  )
}

export default Footer
