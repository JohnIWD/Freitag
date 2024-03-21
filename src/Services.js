import React from 'react'
import painter from './images/painter.jpg'
import drywall from './images/drywall.jpg'
import fencing from './images/fencing.jpg'
import remodel from './images/remodel.jpg'
import planning from './images/planning.jpg'

const Services = () => {
  return (
    <section>
      <div className="container2">
        <div id="services" class="title">
          <h2>Services We Offer</h2>
        </div>
        <div className="services">
          <div className="service">
            <div><img src={painter} alt="painting" /></div>
            <div>
              <h3>Painting</h3>
              <p>Interior and Exterior</p>
            </div>
          </div>
          <div className="service">
            <div><img src={drywall} alt="drywall" /></div>
            <div>
              <h3>Drywall</h3>
              <p>Repair and Replacement</p>
            </div>
          </div>
          <div className="service">
            <div><img src={fencing} alt="fencing" /></div>
            <div>
              <h3>Fencing</h3>
              <p>Repair and Replacement</p>
            </div>
          </div>
          <div className="service">
            <div><img src={remodel} alt="remodel" /></div>
            <div>
              <h3>Remodeling</h3>
              <p>Bathroom</p>
            </div>
          </div>
        </div>
        <div className="planning">
          <div><img src={planning} alt="planning" /></div>
          <div>
            <h3>Rehab and Makeready</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services