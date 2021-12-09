import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Restaurant from '../../interfaces/restaurantInterface';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import './styles.scss';

interface RootState {
  restaurants: Restaurant[], 
}

const RestaurantsList = function () {

  const allRestaurants = useSelector((store:RootState) => store.restaurants);
  const [filteredList, setfilteredList] = useState<Restaurant[]>(allRestaurants);

  const sortArray = (type:any) => {
    const types:any = {
      name: 'name',
      food: 'food_type',
      id: 'id'
    };
    const sortProperty:any = types[type];
    const sorted = allRestaurants.slice().sort((a: any, b:any) => {
      if(a[sortProperty] < b[sortProperty]) { return -1; }
      if(a[sortProperty] > b[sortProperty]) { return 1; }
      return 0;
    });
    setfilteredList(sorted);
  };
function filterList(searchValue: string) {
  setfilteredList(allRestaurants.reduce((acc:Restaurant[], restaurant:Restaurant) => {
      if (restaurant.name.toLocaleLowerCase().includes(
        searchValue.trim().toLocaleLowerCase(),
      )) return [...acc, restaurant];
      else if (restaurant.food_type.toLocaleLowerCase().includes(
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
      <div className="sorting-fields">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a restaurant..."
        onChange={(event) => filterList(event.target.value)}
      />
      <select className="sort-input" onChange={(e) => sortArray(e.target.value)}>
        <option value="">Sort restaurants</option>
        <option value="id">Default</option>
        <option value="name">By name A -&gt; Z</option>
        <option value="food">By food type</option>
      </select>
      </div>
      <ul className="restaurant-list">
        {allRestaurants.length && (
          filterList.length ? (filteredList.map((restaurant:Restaurant) => (
            <RestaurantCard key={`${restaurant.name}-${restaurant.id}`} restaurant={restaurant} />
          ))) : (
            <span className="no-restaurants-msg">No Restaurants were found </span>
          )
        )}
      </ul>
    </>
  );
};

export default RestaurantsList;
