import React from 'react'
import contactImg from './images/contact.jpg'

const Contact = () => {
  return (
    <section id="contact" className="contact flex-columns">
      <div className="row">
        <div className="column">
          <div className="column-1"><img src={contactImg} alt="" /></div>
        </div>
        <div className="column">
          <div className="column-2 bg-light">
            <h2>Request Callback</h2>
            <form className="callback-form" action="process.php" method="POST">
              <div className="form-control"><label for="name"></label> <input id="name" name="name" type="text"
                placeholder="Enter name" /></div>
              <div className="form-control"><label for="email"></label> <input id="email" name="email" type="email"
                placeholder="Enter email" /></div>
              <div className="form-control"><label for="phone"></label> <input id="phone" name="phone" type="text"
                placeholder="Enter phone" /></div>
              <input id="submit" className="btn" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact