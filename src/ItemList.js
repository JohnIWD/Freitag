import React from 'react'
import { FaSquareCheck } from 'react-icons/fa6'

const ItemList = () => {
  return (
    <>
      <div className="mistakes">
        <ul>
          <li><span><i>
            <FaSquareCheck
              className='bar' /></i> Doesn't show up on time</span>
          </li>
        </ul>
        <ul>
          <li><span><i>
            <FaSquareCheck
              className='bar' /></i> Low-quality product</span></li>
        </ul>
        <ul>
          <li><span><i>
            <FaSquareCheck
              className='bar' /></i> Add-on fees</span></li>
        </ul>
      </div>

      <div className="mistakes">
        <ul>
          <li><span><i>
            <FaSquareCheck
              className='bar' /></i> Poor-quality work</span></li>
        </ul>
        <ul>
          <li><span><i>
            <FaSquareCheck
              className='bar' /></i> Leaves a mess</span></li>
        </ul>
        <ul>
          <li><span><i>
            <FaSquareCheck
              className='bar' /></i> Doesn't meet the deadline</span></li>
        </ul>
      </div>




    </>
  )
}

export default ItemList