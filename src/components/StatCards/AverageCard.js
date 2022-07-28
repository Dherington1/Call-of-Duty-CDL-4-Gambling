import React from 'react'
import Button from '@mui/material/Button';

// dispatch the average kills with the value of avg
// make average integer before dispatch

const AverageCard = ({avg}) => {
  return (
    <div style={{textAlignVertical: "center",textAlign: "center",}}>
      <h4>{`Average Kills ${avg}`}</h4>
      <Button variant="outlined">Add Average</Button>
    </div>


  )
}

export default AverageCard