import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { loadRestaurants } from '../../redux/actions/actionCreators';
import Restaurant from '../../interfaces/restaurantInterface';
import './styles.scss';

const Dashboard = function () {
  const dispatch = useDispatch();
  const allRestaurants = useSelector((store:any) => store.restaurants);
  const dashborardRestaurants = allRestaurants.slice(0, 4);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return (
    <>
      <h2>Best Restaurants in Madrid</h2>
      <ul className="restaurant-list">
        {dashborardRestaurants.length && (
          dashborardRestaurants.map((restaurant:Restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        )}
      </ul>

    </>
  );
};

export default Dashboard;
