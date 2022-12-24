import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We provides <span>Wrold Class Hotels</span> to our coustomers.
          </h1>
          <p>Nothing makes you feel better than when you get into a hotel bed, and the sheets feel so good. Why shouldn't you wake up like that every day? Spend money on your mattress and bedding because these things make a difference on your sleep and, ultimately, your happiness. And we provides this according to your request and mood.</p>
          <p>A guide to the world's best hotels, featuring the most amazing places to stay in destinations including Europe, Asia, Indian Ocean, Africa, and more..</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
