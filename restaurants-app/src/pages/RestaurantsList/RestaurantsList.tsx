import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Restaurant from '../../interfaces/restaurantInterface';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import './styles.scss';

const RestaurantsList = function () {
  const allRestaurants = useSelector((store:any) => store.restaurants);
  const [filteredList, setfilteredList] = useState(allRestaurants);

  const filterList = (searchValue: string) => {
    setfilteredList(allRestaurants.reduce((acc:any, restaurant:any) => {
      if (restaurant.name.toLocaleLowerCase().includes(
        searchValue.trim().toLocaleLowerCase(),
      )) return [...acc, restaurant];
      return acc;
    }, []));
  };

  return (
    <>
      <div className="heading">
        <span className="heading__title">All Restaurants</span>
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="Search for a restaurant..."
        onChange={(event) => filterList(event.target.value)}
      />
      <ul className="restaurant-list">
        {allRestaurants.length && (
          filteredList.map((restaurant:Restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        )}
      </ul>
    </>
  );
};

export default RestaurantsList;
