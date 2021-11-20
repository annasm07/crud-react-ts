import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Restaurant from '../../interfaces/restaurantInterface';
import emptyHeart from '../../assets/empty-heart.svg';
import fullHeart from '../../assets/full-heart.svg';
import { addToFavorites, deleteFromFavorites } from '../../redux/actions/actionCreators';

const RestaurantDetail = function () {
  const dispatch = useDispatch();

  const restaurants = useSelector((store:any) => store.restaurants);
  const favorites = useSelector((store:any) => store.favorites);

  const { restaurantId } = useParams();
  const currentRestaurant = restaurants.filter(
    (restaurant:Restaurant) => restaurant.id === Number(restaurantId),
  );

  function isFavorite(restID:number) {
    return favorites.some(({ id }:{id:number}) => id === restID);
  }

  function changeFavourite(restID:number) {
    if (isFavorite(restID)) {
      dispatch(deleteFromFavorites(restID));
    } else {
      dispatch(addToFavorites(currentRestaurant[0]));
    }
  }
  return (
    <>
      <p>
        This is the detail Page
        {' '}
        {currentRestaurant[0].name}
      </p>
      <button
        className={
          isFavorite(currentRestaurant[0].id)
            ? 'heart-button--active'
            : 'heart-button'
}
        type="button"
        onClick={() => changeFavourite(currentRestaurant[0].id)}
      >

        <figure>
          <img
            src={isFavorite(currentRestaurant[0].id) ? fullHeart : emptyHeart}
            alt="favorite-icon"
          />

        </figure>
      </button>
    </>
  );
};

export default RestaurantDetail;
