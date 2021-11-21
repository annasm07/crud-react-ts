/* eslint-disable default-param-last */
import { AnyAction } from 'redux';
import Restaurant from '../../interfaces/restaurantInterface';
import actionTypes from '../actions/actionTypes';

function favoritesReducer(state = [], action: AnyAction) {
  let newState = [];
  switch (action.type) {
    case actionTypes.LOAD_ALL_FAVORITES:
      newState = action.favorites;
      break;

    case actionTypes.ADD_TO_FAVORITES:
      newState = [...state, action.newFavorite];
      break;

    case actionTypes.DELETE_FROM_FAVORITES:
      newState = state.filter((restaurant: Restaurant) => restaurant.id !== action.id);
      break;

    case actionTypes.UPDATE_RESTAURANT_FAV:
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

export default favoritesReducer;
