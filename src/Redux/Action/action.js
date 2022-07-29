// actions used to add and remove totals from party
import {createAction} from '@reduxjs/toolkit';

// actions here use in reducers.js
export const addAvg = createAction('addAvg');
export const deleteAvg = createAction('deleteAvg');
export const deleteAllAvg = createAction('deleteAllAvg');