import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { loadRestaurants } from '../../redux/actions/actionCreators';

const Dashboard = function () {
  const dispatch = useDispatch();
  const restaurants = useSelector((store:any) => store.restaurants);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return (
    <>
      <h2>Best Restaurants in Madrid</h2>
      {restaurants.length && (
        restaurants.map((restaurant:any) => (
          <div key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))
      )}
    </>
  );
};

export default Dashboard;
