import React from 'react';
import { Link } from 'react-router-dom';
import Restaurant from '../../interfaces/restaurantInterface';
import './styles.scss';
import calculateMedium from '../../services/calculateMedium';

const RestaurantCard = function ({ restaurant } : {restaurant:Restaurant}) {
  return (
    <li className="restaurant-card">
      <Link to={`/restaurant/${restaurant.id}`} className="restaurant-card__item">
        <img src={restaurant.image_url} alt={restaurant.name} className="restaurant-card__img" />
        <div className="restaurant-card__information">
          <span className="information__name">
            {restaurant.name}
            {' '}
            {restaurant.id}
          </span>
          <span className="information__review">
            {calculateMedium(restaurant.reviews)}
            {' '}
            / 5
          </span>
        </div>
      </Link>
    </li>
  );
};

export default RestaurantCard;
