import React from 'react'

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Card components
import OpponentCard  from './OpponentCard'
import KillCard from './KillCard'
import AverageCard from './AverageCard'



const StatCard = ({kills, opponent, average}) => {
  return (
    <div>
      <KillCard kills={kills}></KillCard>
    </div>
  )
}

export default StatCard