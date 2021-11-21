import React from 'react';
import { fireEvent, render, screen } from '../../utils/test-utils';
import RestaurantDetail from './RestaurantDetail';
import { BrowserRouter } from 'react-router-dom';
import Restaurant from '../../interfaces/restaurantInterface';

jest.mock('../../services/isFavorite');

describe('Given the RestaurantCard', () => {
    const initialState ={
        preloadedState:{
            favorites: {
                id: 1,
                name: "Restaurant for test",
                image_url: "https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg",
                reviews: [3,2,3,2,2,4,5,5,5,5,5], 
                food_type: "Cocktails & Surprises",
                address: [
                    "C/ Gran Vía, 12",
                    "28013, Madrid"
                ],
                visited: true,
                open_hours: [{open_time:"",
                close_time:""}]
            }, 
            restaurant: {
                id: 1,
                name: "Restaurant for test",
                image_url: "https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg",
                reviews: [3,2,3,2,2,4,5,5,5,5,5], 
                food_type: "Cocktails & Surprises",
                address: [
                    "C/ Gran Vía, 12",
                    "28013, Madrid"
                ],
                visited: true,
                open_hours: [{open_time:"",
                close_time:""}]
            }
        }
    };

      beforeEach(() =>{
        render(<BrowserRouter><RestaurantDetail/></BrowserRouter>);
      })
    
    test('When rendered the name of restaurant should be rendered', () => {
       
        expect(screen.getByText(/Restaurant for test/i)).toBeInTheDocument();
    });
});
