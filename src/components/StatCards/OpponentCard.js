import React from 'react'
import './statCards.css'

const OpponentCard = ({opp}) => {
  return (
    <div>
      <img className='teamImg rounded mx-auto d-block' src={`images/Teams/${opp}-logo.png`} alt={opp} />
    </div>
  )
}

export default OpponentCard;
