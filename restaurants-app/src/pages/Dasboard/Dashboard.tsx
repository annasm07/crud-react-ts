import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <Link to={`/restaurant/${restaurant.id}`}>
              <p>{restaurant.name}</p>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default Dashboard;
