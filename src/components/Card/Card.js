import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='card'>
      <div className='charity-card-info'>
        <h3>Charity Name</h3>
        <span className='charity-contact'>Contact</span>
        <span className='charity-contact'>Website</span>
        <span className='charity-contact'>Location</span>
      </div>
      <div className='charity-card-needs'>
        <h4>Needs</h4>
        <ul>
          <li>Canned foods</li>
          <li>Toilet paper</li>
          <li>Hand warmers</li>
        </ul>
      </div>
    </div>
    )
}

export default Card