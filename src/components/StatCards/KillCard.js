import React from 'react'
import './statCards.css'


function KillCard({kills}) {
  return (
    <div>
      <p className='kills'>{kills}</p>
    </div>
  )
}

export default KillCard