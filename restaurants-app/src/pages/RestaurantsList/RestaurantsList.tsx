import React from 'react';
import { useSelector } from 'react-redux';
import Restaurant from '../../interfaces/restaurantInterface';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

const RestaurantsList = function () {
  const allRestaurants = useSelector((store:any) => store.restaurants);

  return (
    <>
      <span>Restaurants List will be displayed here</span>
      <ul className="restaurant-list">
        {allRestaurants.length && (
          allRestaurants.map((restaurant:Restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        )}
      </ul>
    </>
  );
};

export default RestaurantsList;
