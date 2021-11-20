import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Restaurant from '../../interfaces/restaurantInterface';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { loadFavorites } from '../../redux/actions/actionCreators';

const Favorites = function () {
  const dispatch = useDispatch();

  const favoritesList = useSelector((store:any) => store.favorites);

  useEffect(() => {
    dispatch(loadFavorites());
  }, []);

  return (
    <>
      <span>Favorites List will be displayed here</span>
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
