import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Restaurant from '../../interfaces/restaurantInterface';

const RestaurantDetail = function () {
  const restaurants = useSelector((store:any) => store.restaurants);

  const { restaurantId } = useParams();
  const currentRestaurant = restaurants.filter(
    (restaurant:Restaurant) => restaurant.id === Number(restaurantId),
  );
  return (
    <p>
      This is the detail Page
      {' '}
      {currentRestaurant[0].name}
    </p>
  );
};

export default RestaurantDetail;
