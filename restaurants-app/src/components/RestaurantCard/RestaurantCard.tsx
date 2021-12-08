import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Restaurant from '../../interfaces/restaurantInterface';
import { Rating } from 'react-simple-star-rating'
import './styles.scss';
import calculateMedium from '../../services/calculateMedium';



const RestaurantCard = function ({ restaurant } : {restaurant:Restaurant}) {
  const [rating, setRating] = useState(0)
  const handleRating = (rate: number) => {
    setRating(rate)
  }
  return (
    <li className="restaurant-card">
      <Link to={`/restaurant/${restaurant.id}`} className="restaurant-card__item">
        <img src={restaurant.image_url} alt={restaurant.name} className="restaurant-card__img" />
        <div className="restaurant-card__information">
          <span className="information__name">
            {restaurant.name}
          </span>
          <Rating
          onClick={handleRating}
          readonly = {true}
          allowHalfIcon = {true}
          size = {30}
          ratingValue={Number(calculateMedium(restaurant.reviews))}
      />
        </div>
      </Link>
    </li>
  );
};

export default RestaurantCard;
