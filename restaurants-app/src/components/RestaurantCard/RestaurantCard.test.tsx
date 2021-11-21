import React from 'react';
import { render, screen } from '../../utils/test-utils';
import RestaurantCard from './RestaurantCard';
import { BrowserRouter } from 'react-router-dom';
import Restaurant from '../../interfaces/restaurantInterface';


describe('When the RestaurantCard component is rendered', () => {
  test('Then name of restaurant should be rendered', () => {
      const restaurant: Restaurant ={
          id: 1,
        name: "Restaurant for test",
        "image_url": "https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg",
        "reviews": [3,2,3,2,2,4,5,5,5,5,5], 
          food_type: "Cocktails & Surprises",
      address: [
        "C/ Gran Vía, 12",
        "28013, Madrid"
      ],
      visited: true,
      open_hours: [{open_time:"",
        close_time:""}]
        }
    render(<BrowserRouter><RestaurantCard restaurant={restaurant}/></BrowserRouter>);
    expect(screen.getByText(/Restaurant for test/i)).toBeInTheDocument();
  });
});
