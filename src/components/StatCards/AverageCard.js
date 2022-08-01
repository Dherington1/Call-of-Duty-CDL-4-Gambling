import React from 'react'
import '../PlayerSelection/PlayerSelection.css'

// MUI button
import Button from '@mui/material/Button';

// action to add avg to total
import {addAvg} from '../../Redux/Action/action';

// bring in our global variable
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';


const AverageCard = ({avg, mode}) => {

  // reference to global state to push an action to data 
  const dispatch = useDispatch();

  // reference to global state to grab data
  const total = useSelector(state => state.total.total);

  // add to global function
  const addToGlobalState = (e) => {
    e.preventDefault();
    // grab id to dispatch
    let newAvgId = e.target.id; 
    // make id an float
    let intAvg = parseFloat(newAvgId);

    // checks to see if avg is all ready added to global 
    let found = false;
    for(let i = 0; i < total.length; i++) {
      if (total[i].mode === mode) {
        found = true;
        break;
      }
    }

    // check to see already in the party and if party is less than 6
    if (total.length < 3 && found === false) {
    
      // dispatch selected avg id to global variable
      dispatch(
        // use action avg and gamemode
        addAvg({
          id: intAvg,
          mode: mode,
        })
      ) 
    }
    
  }

  return (
    <div style={{textAlignVertical: "center",textAlign: "center",}}>
      <h4 className='avgKills'>{`Average Kills ${avg}`}</h4>
      <Button className={mode} onClick={addToGlobalState} id={avg} variant="outlined">Add Average</Button>
    </div>
  )
}

export default AverageCard