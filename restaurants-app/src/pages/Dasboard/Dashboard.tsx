import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { loadRestaurants } from '../../redux/actions/actionCreators';
import Restaurant from '../../interfaces/restaurantInterface';
import './styles.scss';

const Dashboard = function () {
  const dispatch = useDispatch();
  const restaurants = useSelector((store:any) => store.restaurants);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return (
    <>
      <h2>Best Restaurants in Madrid</h2>
      <ul className="restaurant-list">
        {restaurants.length && (
          restaurants.map((restaurant:Restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        )}
      </ul>

    </>
  );
};

export default Dashboard;
