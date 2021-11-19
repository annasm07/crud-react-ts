/* eslint-disable default-param-last */
import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';

function restaurantsReducer(state = [], action: AnyAction) {
  let newState;
  switch (action.type) {
    case actionTypes.LOAD_ALL_RESTAURANTS:
      newState = action.restaurants;
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}

export default restaurantsReducer;
