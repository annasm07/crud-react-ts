import restaurantsReducer from "./restaurantsReducer";
import actionTypes from '../actions/actionTypes';

describe('Given favoritesReducer function ', () => {
    test('when action.type = LOAD_ALL_FAVORITES, then should return array', () => {
        const initialState:any = [];
        const action ={
            type: actionTypes.LOAD_ALL_FAVORITES,
            favorites: [{ id:2, name:"Restaurant" }]
        }
        expect(restaurantsReducer(initialState, action)).toEqual([])
    });
    test('when action.type = LOAD_ALL_RESTAURANTS, then should return array', () => {
        const initialState:any = [];
        const action ={
            type: actionTypes.LOAD_ALL_RESTAURANTS,
            restaurants: [{ id:2, name:"Restaurant" }]
        }
        expect(restaurantsReducer(initialState, action)).toEqual([{ id:2, name:"Restaurant" }])
    });
    test('when action.type = UPDATE_RESTAURANT, then should return array', () => {
        const initialState:any = [{ id:2, name:"Restaurant 2" }, { id:3, name:"Restaurant 3" }];
        const action ={
            type: actionTypes.UPDATE_RESTAURANT,
            updatedRestaurant: { id:2, name:"Restaurant abc" }
        }
        expect(restaurantsReducer(initialState, action)).toEqual([{ id:2, name:"Restaurant abc" }, { id:3, name:"Restaurant 3" }])
    });
});