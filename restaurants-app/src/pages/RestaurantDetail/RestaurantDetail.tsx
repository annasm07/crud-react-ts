import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Restaurant from '../../interfaces/restaurantInterface';
import {
  updateRestaurant,
  updateRestaurantFavs,
} from '../../redux/actions/actionCreators';
import './styles.scss';
import calculateMedium from '../../services/calculateMedium';
import FavoritesButton from '../../components/FavoriteButton/FavoriteButton';
import isFavorite from '../../services/isFavorite';

const RestaurantDetail = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  const restaurants = useSelector((store:any) => store.restaurants);
  const favorites = useSelector((store:any) => store.favorites);

  const [newReview, setnewReview] = useState<string>('');
  const [reviewsMedium, setreviewsMedium] = useState<number>(0);

  const currentRestaurant = restaurants.filter(
    (restaurant:Restaurant) => restaurant.id === Number(restaurantId),
  );

  useEffect(() => {
    setreviewsMedium(Number(calculateMedium(currentRestaurant[0]?.reviews)));
  }, [restaurants]);

  const handleReviewSent = (formReview: string) => {
    const updatedRestaurant = {
      ...currentRestaurant[0], reviews: [...currentRestaurant[0].reviews, Number(formReview)],
    };
    dispatch(updateRestaurant(updatedRestaurant));
    if (isFavorite(currentRestaurant[0].id, favorites)) dispatch(updateRestaurantFavs(updatedRestaurant));
  };

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
            <li key="address">Address: {currentRestaurant[0]?.address.map((item:string) => <span key={item}>{item}</span>)}</li>
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
            <select className="select-input" name="review" id="review" onChange={(event) => setnewReview(event?.target.value)}>
              <option key="option-0" value="">--Please choose an option--</option>
              <option key="option-1" value="1">1</option>
              <option key="option-2" value="2">2</option>
              <option key="option-3" value="3">3</option>
              <option key="option-4" value="4">4</option>
              <option key="option-5" value="5">5</option>
            </select>
            <input
              className="button"
              type="button"
              value="Submit"
              onClick={() => handleReviewSent(newReview)}
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
