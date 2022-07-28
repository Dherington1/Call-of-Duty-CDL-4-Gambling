import React from 'react'
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


    // check to see already in the party and if party is less than 6
    if (total.length < 3 ) {
    
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


  // hide button for gamemode
  // dispatch the gamemode too 
  // pull to a variable gamemodes and if its not one of them then add avg


  return (
    <div style={{textAlignVertical: "center",textAlign: "center",}}>
      <h4>{`Average Kills ${avg}`}</h4>
      <Button className={mode} onClick={addToGlobalState} id={avg} variant="outlined">Add Average</Button>
    </div>
  )
}

export default AverageCard