import React from 'react'
import blackFence from './images/black fence.jpg'
import upperDeck2 from './images/upper deck 2.jpg'
import railing from './images/porch railing.jpg'
import drywall from './images/drywall.jpg'
import epoxyFloor from './images/epoxy floor.jpg'
import grayDeck from './images/gray deck.jpg'

const Samples = () => {
  return (
    <section>
      <div id="samples" className="samples">
        <div>
          <div className="title">
            <h3>Some of Our Work</h3>
          </div>
        </div>
        <div className="sample">
          <div><img src={blackFence} alt="fence" /></div>
          <div><img src={upperDeck2} alt="deck2" /></div>
          <div><img src={railing} alt="railing" /></div>
          <div><img src={drywall} alt="drywall" /></div>
          <div><img src={epoxyFloor} alt="epoxy floor" /></div>
          <div><img src={grayDeck} alt="decking" /></div>
        </div>
      </div>
    </section>
  )
}

export default Samples