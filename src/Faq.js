import React from 'react'
import { FaCheck } from "react-icons/fa";

const Faq = () => {
  return (
    <section className="icons bg-light banner">
      <div>
        <div className="flex-items">
          <div>
            <div>
              <h3>Freitag Construction FAQ's</h3>
              <div>
                <div className="mistakes">
                  <ul className="faq">
                    <li className="check"><span><i><FaCheck className="bar" /></i> Are you licensed and
                      insured?</span>
                    </li>
                    <p>Yes, this protects your home, and it protects us.</p>
                  </ul>
                  <ul className="faq">
                    <li className="check"><span><i><FaCheck className="bar" /></i> Do you offer financing?</span>
                    </li>
                    <p>Yes</p>
                  </ul>
                  <ul className="faq">
                    <li className="check"><span><i><FaCheck className="bar" /></i> Will a sales rep call
                      me?</span></li>
                    <p>No, the owner is very active in the business, so he will call you and provide you with an
                      estimate.</p>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq