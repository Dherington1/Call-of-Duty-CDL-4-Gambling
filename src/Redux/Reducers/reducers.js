import { createReducer } from '@reduxjs/toolkit';

//import from actions 
import {addAvg} from '../Action/action';
import {deleteAvg} from '../Action/action';

// initialState of globalState
const initialState = {
    total: []
}

// allows for change in the initialState
const totalReducer = createReducer(initialState, (builder) => {

    // builder always us to add cases to our state
    // action, (receives state and action)
    builder
            // case to add avg to total
            .addCase(addAvg, (state, action) => {
                // reducer to add avg to the array
                state.total.push(action.payload)
            })
            // case to delete avg from total
            .addCase(deleteAvg, (state, action) => {
                // make the string a float as that is how it was added
                let actionFloat = parseFloat(action.payload.id)
    
                // filter to get avg that weren't selected to be deleted
                state.total = state.total.filter(avg => avg.id !== actionFloat)
                console.log(state.total);
        })
})
// pokemon.id !== action.payload.id

export default totalReducer;
