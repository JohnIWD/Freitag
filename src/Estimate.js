import React from 'react'
import { FaWpforms } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";


const Estimate = () => {
  return (
    <section>
      <div className="estimate">
        <div>
          <div className="title">
            <h3>It's So Simple To Get A Free Estimate</h3>
          </div>
        </div>

        <div>
          <div className="info-box">
            <div className="simple">
              <div className="info">
                <h3>Fill Out The Form</h3>
                <p>Fill out the form with your name, telephone number, and location.</p>
              </div>

              <div><i><FaWpforms className='icon' /></i></div>
            </div>
            <div className="simple">
              <div><i><FaPhoneFlip className="icon" /></i></div>
              <div className="info">
                <h3>We Contact You</h3>
                <p>We will reach out to discuss the service you need and schedule a time to come to your home.</p>
              </div>


            </div>
            <div className="simple">
              <div className="info">
                <h3>Free Custom Quote</h3>
                <p>We will come to your home at the scheduled time to evaluate, thoroughly explain the process, and
                  provide a quote.</p>
              </div>

              <div><i><FaHouse className="icon" /></i></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Estimate