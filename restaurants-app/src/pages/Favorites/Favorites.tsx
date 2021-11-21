import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Restaurant from '../../interfaces/restaurantInterface';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { loadFavorites } from '../../redux/actions/actionCreators';
import './styles.scss';

const Favorites = function () {
  const dispatch = useDispatch();

  const favoritesList = useSelector((store:any) => store.favorites);

  useEffect(() => {
    dispatch(loadFavorites());
  }, []);

  return (
    <>
      <div className="heading">
        <span className="heading__title">My Favortite Restaurants</span>
      </div>
      <ul className="restaurant-list">
        {favoritesList.length && (
          favoritesList.map((restaurant:Restaurant) => (
            <RestaurantCard key={restaurant?.id} restaurant={restaurant} />
          ))
        )}
      </ul>
    </>
  );
};

export default Favorites;
