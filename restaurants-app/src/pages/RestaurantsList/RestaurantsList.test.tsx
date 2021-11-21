import React from 'react';
import { fireEvent, render, screen } from '../../utils/test-utils';
import RestaurantsList from './RestaurantsList';
import { BrowserRouter } from 'react-router-dom';
import Restaurant from '../../interfaces/restaurantInterface';
import {
    addToFavorites,
    deleteFromFavorites,
  } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Given the RestaurantCard', () => {
    const initialState ={
        preloadedState:{
            restaurants: [{
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
            }]
        }
        
    };
      beforeEach(() =>{
        render(<BrowserRouter><RestaurantsList/></BrowserRouter>, initialState);
      })
    
    test('When rendered the name of restaurant should be rendered', () => {
        expect(screen.getByText(/Restaurant for test/i)).toBeInTheDocument();
    });

    describe('When we type in input field ', () => {
        
        describe('And the search input is "test" ', () => {
            test('Then Chicote should not be rendered', () => {
                const filterInput = screen.getByPlaceholderText(/Search for a restaurant.../i);
                fireEvent.change(filterInput, { target: { value: 'test' } });
                expect(screen.queryByText(/Chicote/i)).not.toBeInTheDocument();
            });
        });
        describe('And the search input is "Restaurant for test" ', () => {
            test('Then Restaurant for test should be rendered', () => {
                const filterInput = screen.getByPlaceholderText(/Search for a restaurant.../i);
                fireEvent.change(filterInput, { target: { value: 'test' } });
                expect(screen.queryByText(/Restaurant for test/i)).toBeInTheDocument();
            });
        });
    });
});
