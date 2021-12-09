import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from 'react-simple-star-rating'
import Restaurant from '../../interfaces/restaurantInterface';
import {
  updateRestaurant,
  updateRestaurantFavs,
} from '../../redux/actions/actionCreators';
import './styles.scss';
import calculateMedium from '../../services/calculateMedium';
import FavoritesButton from '../../components/FavoriteButton/FavoriteButton';
import isFavorite from '../../services/isFavorite';

interface RootState {
  restaurants: Restaurant[], 
  favorites: Restaurant[]
}

const RestaurantDetail = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  const restaurants = useSelector((store:RootState) => store.restaurants);
  const favorites = useSelector((store:RootState) => store.favorites);

  const [rating, setRating] = useState(0)
  const [reviewsMedium, setreviewsMedium] = useState<number>(0);

  const currentRestaurant = restaurants.filter(
    (restaurant:Restaurant) => restaurant.id === Number(restaurantId),
  );

  useEffect(() => {
    setreviewsMedium(Number(calculateMedium(currentRestaurant[0]?.reviews)));
  }, [restaurants, currentRestaurant]);

  const handleReviewSent = (formReview: number) => {
    const updatedRestaurant = {
      ...currentRestaurant[0], reviews: [...currentRestaurant[0].reviews, formReview],
    };
    dispatch(updateRestaurant(updatedRestaurant));
    if (isFavorite(currentRestaurant[0].id, favorites)) dispatch(updateRestaurantFavs(updatedRestaurant));
  };

  const handleRating = (rate: number) => {
    setRating((rate/10)/2)
    }

  return (
    <>
      <div className="heading">
        <span className="heading__title">{currentRestaurant[0]?.name}</span>
        <FavoritesButton restaurant={currentRestaurant[0]} />
      </div>
      <div className="details-container">
        <img
          src={currentRestaurant[0]?.image_url}
          alt={currentRestaurant[0]?.name}
          className="restaurant-detail__img"
        />

        <div className="information-list">
          <ul>
            <li key={currentRestaurant[0]?.food_type}>
              <span>Food type: {currentRestaurant[0]?.food_type}</span>
            </li>
            <li key="address">Address: {currentRestaurant[0]?.address.map((item:string) => <span key={item}>{item} </span>)}</li>
            <li key="review">
              <span>
                Costumer scores:
                {' '}
                {reviewsMedium}
                {' '}
                / 5
              </span>
            </li>
          </ul>
          <form action="#" method="get" className="review-form">

            <span className="review-form__label">Add a Review</span>
            <div className="review-form__select">
            <Rating
          onClick={handleRating}
          allowHalfIcon = {true}
          size = {30}
          ratingValue={Number(reviewsMedium)}
      />
            <input
              className="button"
              type="button"
              value="Submit"
              onClick={() => handleReviewSent(rating)}
            />
            </div>
          </form>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="button">Go Back</button>
    </>
  );
};

export default RestaurantDetail;
