import axios from 'axios';
import Restaurant from '../../interfaces/restaurantInterface';
import { AppDispatch } from '../store';
import actionTypes from './actionTypes';

export function loadRestaurants() {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios('http://localhost:3004/restaurants');
    dispatch({
      type: actionTypes.LOAD_ALL_RESTAURANTS,
      restaurants: data,
    });
  };
}

export function loadFavorites() {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios('http://localhost:3004/favorites');
    dispatch({
      type: actionTypes.LOAD_ALL_FAVORITES,
      favorites: data,
    });
  };
}

export function addToFavorites(restaurant: Restaurant) {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios.post('http://localhost:3004/favorites', restaurant);
    dispatch({
      type: actionTypes.ADD_TO_FAVORITES,
      newFavorite: data,
    });
  };
}

export function deleteFromFavorites(id:number) {
  return async (dispatch: AppDispatch) => {
    await axios.delete(`http://localhost:3004/favorites/${id}`);
    dispatch({
      type: actionTypes.DELETE_FROM_FAVORITES,
      id,
    });
  };
}
