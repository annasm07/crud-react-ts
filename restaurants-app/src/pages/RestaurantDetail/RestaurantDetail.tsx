import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Restaurant from '../../interfaces/restaurantInterface';
import emptyHeart from '../../assets/empty-heart.svg';
import fullHeart from '../../assets/full-heart.svg';
import {
  addToFavorites,
  deleteFromFavorites,
  updateRestaurant,
  updateRestaurantFavs,
} from '../../redux/actions/actionCreators';
import './styles.scss';
import calculateMedium from '../../services/calculateMedium';

const RestaurantDetail = function () {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();

  const restaurants = useSelector((store:any) => store.restaurants);
  const favorites = useSelector((store:any) => store.favorites);

  const [newReview, setnewReview] = useState<string>('');
  const [reviewsMedium, setreviewsMedium] = useState<number>(0);

  const currentRestaurant = restaurants.filter(
    (restaurant:Restaurant) => restaurant.id === Number(restaurantId),
  );

  function isFavorite(restID:number) {
    return favorites.some(({ id }:{id:number}) => id === restID);
  }

  useEffect(() => {
    setreviewsMedium(Number(calculateMedium(currentRestaurant[0]?.reviews)));
  }, [restaurants]);

  function changeFavourite(restID:number) {
    if (isFavorite(restID)) {
      dispatch(deleteFromFavorites(restID));
    } else {
      dispatch(addToFavorites(currentRestaurant[0]));
    }
  }

  const handleReviewSent = (formReview: string) => {
    const updatedRestaurant = {
      ...currentRestaurant[0], reviews: [...currentRestaurant[0].reviews, Number(formReview)],
    };
    dispatch(updateRestaurant(updatedRestaurant));
    if (isFavorite(currentRestaurant[0].id)) dispatch(updateRestaurantFavs(updatedRestaurant));
  };

  return (
    <>
      <div className="heading">
        <span className="heading__title">{currentRestaurant[0]?.name}</span>
        <button
          className="heart-button"
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
      </div>
      <div className="details-container">
        <img
          src={currentRestaurant[0]?.image_url}
          alt={currentRestaurant[0]?.name}
          className="restaurant-detail__img"
        />

        <div className="information-list">
          <ul>
            <li><span>{currentRestaurant[0]?.food_type}</span></li>
            <li>{currentRestaurant[0]?.address.map((item:string) => <span>{item}</span>)}</li>
            <li><span>{reviewsMedium}</span></li>
          </ul>
          <form action="#" method="get">

            <span>Add a Review</span>
            <select name="review" id="review" onChange={(event) => setnewReview(event?.target.value)}>
              <option key="option-0" value="">--Please choose an option--</option>
              <option key="option-1" value="1">1</option>
              <option key="option-2" value="2">2</option>
              <option key="option-3" value="3">3</option>
              <option key="option-4" value="4">4</option>
              <option key="option-5" value="5">5</option>
            </select>
            <input
              type="button"
              value="Submit"
              onClick={() => handleReviewSent(newReview)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetail;
