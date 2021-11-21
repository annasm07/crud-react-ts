import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

describe('When the Dashboard component is rendered', () => {
    const initialState ={
        preloadedState:{
            favorites: [{
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
  test('Then Favorites of application should be in the document', () => {
    render(<BrowserRouter><Dashboard /></BrowserRouter>, initialState);
    expect(screen.getByText(/Madrid/i)).toBeInTheDocument();
  });
});
