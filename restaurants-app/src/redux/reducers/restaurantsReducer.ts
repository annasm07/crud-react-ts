/* eslint-disable default-param-last */
import { AnyAction } from 'redux';
import Restaurant from '../../interfaces/restaurantInterface';
import actionTypes from '../actions/actionTypes';

function restaurantsReducer(state = [], action: AnyAction) {
  let newState;
  switch (action.type) {
    case actionTypes.LOAD_ALL_RESTAURANTS:
      newState = action.restaurants;
      break;

    case actionTypes.UPDATE_RESTAURANT:
      newState = state.map((restaurant: Restaurant) => (
        (restaurant.id === action.updatedRestaurant.id
          ? action.updatedRestaurant
          : restaurant
        )
      ));
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}

export default restaurantsReducer;
