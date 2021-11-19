import React from 'react';
import { Link } from 'react-router-dom';
import Restaurant from '../../interfaces/restaurantInterface';
import './styles.scss';

const RestaurantCard = function ({ restaurant } : {restaurant:Restaurant}) {
  return (
    <li className="restaurant-card">
      <Link to={`/restaurant/${restaurant.id}`} className="restaurant-card__item">
        <img src={restaurant.image_url} alt={restaurant.name} className="restaurant-card__img" />
        <div>
          <span className="restaurant-card__name">{restaurant.name}</span>
        </div>
      </Link>
    </li>
  );
};

export default RestaurantCard;
