import axios from 'axios';
import Restaurant from '../../interfaces/restaurantInterface';
import { 
  loadRestaurants, 
  loadFavorites,
  addToFavorites,
  updateRestaurant,
  updateRestaurantFavs,
  deleteFromFavorites 
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('Given a actionCreator file', () => {
  const response = {
    data: [
      { id: 13, name: "Testing"}
    ]};
  const restaurant: Restaurant = {
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
  const dispatch = jest.fn();

    describe('When loadRestaurants is called', () => {
      test('Then should dispatch type and payload', async () => {

        mockedAxios.get.mockResolvedValue(Promise.resolve(response));
        await loadRestaurants()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.LOAD_ALL_RESTAURANTS,
            restaurants: response.data,
          });
      });
    });
    
    describe('When loadFavorites is called', () => {
      test('Then should dispatch type and payload', async () => {

        mockedAxios.get.mockResolvedValue(Promise.resolve(response));
        await loadFavorites()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.LOAD_ALL_FAVORITES,
            favorites: response.data,
          });
      });
    });
    
    describe('When addToFavorites is called', () => {
      test('Then should dispatch type and payload', async () => {

        mockedAxios.post.mockResolvedValue(Promise.resolve(response));
        await addToFavorites(restaurant)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.ADD_TO_FAVORITES,
            newFavorite: response.data,
          });
      });
    });

    describe('When deleteFromFavorites is called', () => {
      test('Then should dispatch type and payload', async () => {

        mockedAxios.post.mockResolvedValue(Promise.resolve(response));
        await deleteFromFavorites(restaurant.id)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.DELETE_FROM_FAVORITES,
            id: restaurant.id,
          });
      });
    });
    
    describe('When updateRestaurant is called', () => {
      test('Then should dispatch type and payload', async () => {

        mockedAxios.put.mockResolvedValue(Promise.resolve(response));
        await updateRestaurant(restaurant)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.UPDATE_RESTAURANT,
            updatedRestaurant: response.data,
          });
      });
    });

    describe('When updateRestaurantFavs is called', () => {
      test('Then should dispatch type and payload', async () => {

        mockedAxios.put.mockResolvedValue(Promise.resolve(response));
        await updateRestaurantFavs(restaurant)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.UPDATE_RESTAURANT_FAV,
            updatedRestaurant: response.data,
          });
      });
    });

});
