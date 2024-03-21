import React from 'react'
import logo from './images/Freitag.png'

const About = () => {
  return (
    <section id="about">
      <div className="title">
        <h2>About Freitag Construction</h2>
      </div>
      <div className="about">
        <div>
          <p>At Freitag Construction, we take pride in being the premier solution for all your home maintenance and
            improvement needs. We've been providing high-quality work at affordable prices for over 10 years. We are
            licensed, insured professionals who arrive promptly to get the job done right. We service the South Jersey,
            Southeastern Pa, and Northern Del. Contact us today for a free estimate!</p>
        </div>
        <div><img src={logo} alt="logo" /></div>
      </div>
    </section>
  )
}

export default About