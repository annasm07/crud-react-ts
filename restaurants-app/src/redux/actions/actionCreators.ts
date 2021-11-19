import axios from 'axios';
import { AppDispatch } from '../store';
import actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function loadRestaurants() {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios('http://localhost:3004/restaurants');
    dispatch({
      type: actionTypes.LOAD_ALL_RESTAURANTS,
      restaurants: data,
    });
  };
}
