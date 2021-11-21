import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emptyHeart from '../../assets/empty-heart.svg';
import fullHeart from '../../assets/full-heart.svg';
import Restaurant from '../../interfaces/restaurantInterface';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../redux/actions/actionCreators';
import isFavorite from '../../services/isFavorite';

const FavoritesButton = function ({ restaurant } : {restaurant:Restaurant}) {
  const favorites = useSelector((store:any) => store.favorites);
  const dispatch = useDispatch();

  function changeFavourite(restID:number) {
    if (isFavorite(restID, favorites)) {
      dispatch(deleteFromFavorites(restID));
    } else {
      dispatch(addToFavorites(restaurant));
    }
  }
  return (
    <button
      className="heart-button"
      type="button"
      onClick={() => changeFavourite(restaurant.id)}
    >
      <figure>
        <img
          src={isFavorite(restaurant.id, favorites) ? fullHeart : emptyHeart}
          alt="favorite-icon"
        />
      </figure>
    </button>
  );
};

export default FavoritesButton;
