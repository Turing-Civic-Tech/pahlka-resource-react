import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='card'>
      <h3>Charity Name</h3>
      <span className='charity-contact'>Contact</span>
      <span className='charity-contact'>Website</span>
      <span className='charity-contact'>Location</span>
    </div>
    )
}

export default Card