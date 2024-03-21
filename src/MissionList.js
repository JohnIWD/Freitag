import React from 'react'
import { FaLightbulb } from "react-icons/fa";

const MissionList = () => {
  return (
    <>
      <div className="mistakes">
        <ul>
          <li><span><i> <FaLightbulb className="bar" /></i> We deliver high-quality
            services at affordable prices.</span>
          </li>
        </ul>
        <ul>
          <li><span><i> <FaLightbulb className="bar" /></i> Our technicians are highly-skilled
            craftsmen.</span></li>
        </ul>
        <ul>
          <li><span><i> <FaLightbulb className="bar" /></i> Our workmanship is guaranteed.</span></li>
        </ul>
        <ul>
          <li><span><i> <FaLightbulb className="bar" /></i> Never any hidden fees.</span></li>
        </ul>

      </div>
      <div className="mistakes">
        <ul>
          <li><span><i> <FaLightbulb className="bar" /></i> We offer a wide range of home maintenance and
            repair solutions.</span></li>
        </ul>
        <ul>
          <li><span><i> <FaLightbulb className="bar" /></i> We have over 30 years of combined
            experience.</span></li>
        </ul>
        <ul>
          <li><span><i> <FaLightbulb className="bar" /></i> We are licensed and fully insured.</span>
          </li>
        </ul>
        <ul>
          <li><span><i> <FaLightbulb className="bar" /></i> Highest quality products.</span></li>
        </ul>
      </div>
    </>
  )
}

export default MissionList