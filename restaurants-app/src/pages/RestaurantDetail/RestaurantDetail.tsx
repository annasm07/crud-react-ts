import React from 'react';
import {
  useParams,
} from 'react-router-dom';

const RestaurantDetail = function () {
  const { restaurantId } = useParams();
  return (
    <p>
      This is the detail Page
      {' '}
      {restaurantId}
    </p>
  );
};

export default RestaurantDetail;
