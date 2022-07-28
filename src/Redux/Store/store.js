import {configureStore} from '@reduxjs/toolkit';
import totalReducer from '../Reducers/reducers'


// main (holder/distributor) of our global variable 
const store = configureStore({
    reducer: {total: totalReducer},
});

export default store;