import React from 'react'
import painter from './images/painter.jpg'

const Section2 = () => {
  return (
    <section>
      <div className="title">
        <h2>You're Home Project Or Repair Needs To Be Done By A Company That Cares</h2>
      </div>
      <div className="mission">
        <div><img src={painter} alt="painter" /></div>
        <div>
          <div>
            <div>
              <div className="statement">
                <h3 className="mission_color">Highest Quality Products</h3>
              </div>
              <div>
                <p>We do everything we can to provide the best products and service.</p>
              </div>
            </div>
            <div>
              <div className="statement">
                <h3 className="mission_color">Transparency</h3>
              </div>
              <div>
                <p>You will never have any surprise costs or fees at the completion of the job.</p>
              </div>
            </div>
            <div>
              <div className="statement">
                <h3 className="mission_color">Honesty</h3>
              </div>
              <div>
                <p>We are very clear in our communication. What we discuss in the estimate is what we will do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2