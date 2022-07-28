import React from 'react'

// Bootstrap
import Col from 'react-bootstrap/Col';

// bring in our global variable
import {useDispatch} from 'react-redux';

// action to remove avg
import {deleteAvg} from '../../Redux/Action/action';

const DisplayTotals = ({totals}) => {
  // map avg totals
  let totalArr = [];
  totalArr.push(totals)

  // reference to global state to push an action to data 
  const dispatch = useDispatch();  

  // remove avg from global state
  const handleRemove = (e) => {
      e.preventDefault();
      // delete based off number from id
      let selected = e.target.id;
      console.log(selected);

      dispatch(
          // use action deleteAvg
          deleteAvg({
              id: selected
          })
      )
  }




  return (
    <>
      {totalArr.map(total => (
        <Col sm={3} >
         <p>{total.mode}</p>
         <p id={total.id} onClick={handleRemove}>{total.id}</p> 
        </Col>
      ))}
    </>
  )
}

export default DisplayTotals