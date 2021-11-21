import axios from 'axios';
import Restaurant from '../../interfaces/restaurantInterface';
import { AppDispatch } from '../store';
import actionTypes from './actionTypes';

const apiURL = process.env.REACT_APP_APIURL;

export function loadRestaurants() {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios(`${apiURL}/restaurants`);
    dispatch({
      type: actionTypes.LOAD_ALL_RESTAURANTS,
      restaurants: data,
    });
  };
}

export function loadFavorites() {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios(`${apiURL}/favorites`);
    dispatch({
      type: actionTypes.LOAD_ALL_FAVORITES,
      favorites: data,
    });
  };
}

export function addToFavorites(restaurant: Restaurant) {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios.post(`${apiURL}/favorites`, restaurant);
    dispatch({
      type: actionTypes.ADD_TO_FAVORITES,
      newFavorite: data,
    });
  };
}

export function deleteFromFavorites(id:number) {
  return async (dispatch: AppDispatch) => {
    await axios.delete(`${apiURL}/favorites/${id}`);
    dispatch({
      type: actionTypes.DELETE_FROM_FAVORITES,
      id,
    });
  };
}

export function updateRestaurant(restaurant : Restaurant) {
  return async (dispatch: AppDispatch) => {
    const { data } = await axios.put(`${apiURL}/restaurants/${restaurant.id}`, restaurant);
    dispatch({
      type: actionTypes.UPDATE_RESTAURANT,
      updatedRestaurant: data,
    });
  };
}
export function updateRestaurantFavs(restaurant : Restaurant) {
  return async (dispatch: AppDispatch) => {
    await axios.put(`${apiURL}/restaurants/${restaurant.id}`, restaurant);
    const { data } = await axios.put(`${apiURL}/favorites/${restaurant.id}`, restaurant);
    dispatch({
      type: actionTypes.UPDATE_RESTAURANT_FAV,
      updatedRestaurant: data,
    });
  };
}
