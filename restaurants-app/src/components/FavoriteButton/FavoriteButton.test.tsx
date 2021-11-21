import React from 'react';
import { fireEvent, render, screen } from '../../utils/test-utils';
import FavoriteButton from './FavoriteButton';
import { BrowserRouter } from 'react-router-dom';
import Restaurant from '../../interfaces/restaurantInterface';
import {
    addToFavorites,
  } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');
jest.mock('../../services/isFavorite');

describe('Given the FavButton component', () => {
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
            }
        }
        
    };
    const restaurant: Restaurant ={
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
      };


    
    test('When rendered the heart icon should be rendered', () => {
        render(<BrowserRouter><FavoriteButton restaurant={restaurant}/></BrowserRouter>);
        expect(screen.getByAltText(/favorite-icon/i)).toBeInTheDocument();
    });
    describe('When the RestaurantCard component is rendered', () => {
        beforeEach(() =>{
            render(<BrowserRouter><FavoriteButton restaurant={restaurant}/></BrowserRouter>, initialState);
        })
        test('Then name of restaurant should be rendered', () => {
            const favouriteButton = screen.getByRole('button');
            fireEvent.click(favouriteButton);
            expect(addToFavorites).toHaveBeenCalled();
        });
    });
});
