import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = function ({ restaurant }: any) {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <p>{restaurant.name}</p>
    </Link>
  );
};

export default RestaurantCard;
