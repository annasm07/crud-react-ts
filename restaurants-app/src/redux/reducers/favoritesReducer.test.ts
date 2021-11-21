import favoritesReducer from "./favoritesReducer";
import actionTypes from '../actions/actionTypes';

describe('Given favoritesReducer function ', () => {
    test('when action.type = LOAD_ALL_FAVORITES, then should return array', () => {
        const initialState:any = [];
        const action ={
            type: actionTypes.LOAD_ALL_FAVORITES,
            favorites: [{ id:2, name:"Restaurant" }]
        }
        expect(favoritesReducer(initialState, action)).toEqual([{ id:2, name:"Restaurant" }])
    });
    test('when action.type = ADD_TO_FAVORITES, then should return array', () => {
        const initialState:any = [];
        const action ={
            type: actionTypes.ADD_TO_FAVORITES,
            newFavorite: { id:2, name:"Restaurant" }
        }
        expect(favoritesReducer(initialState, action)).toEqual([{ id:2, name:"Restaurant" }])
    });
    test('when action.type = DELETE_FROM_FAVORITES, then should return array', () => {
        const initialState:any = [{ id:2, name:"Restaurant 2" }, { id:3, name:"Restaurant 3" }];
        const action ={
            type: actionTypes.DELETE_FROM_FAVORITES,
            id: 2
        }
        expect(favoritesReducer(initialState, action)).toEqual([{ id:3, name:"Restaurant 3" }])
    });
    test('when action.type = UPDATE_RESTAURANT_FAV, then should return array', () => {
        const initialState:any = [{ id:2, name:"Restaurant 2" }, { id:3, name:"Restaurant 3" }];
        const action ={
            type: actionTypes.UPDATE_RESTAURANT_FAV,
            updatedRestaurant: { id:2, name:"Restaurant abc" }
        }
        expect(favoritesReducer(initialState, action)).toEqual([{ id:2, name:"Restaurant abc" }, { id:3, name:"Restaurant 3" }])
    });
    test('when action.type = LOAD_ALL_RESTAURANTS, then should return array', () => {
        const initialState:any = [];
        const action ={
            type: actionTypes.LOAD_ALL_RESTAURANTS,
            restaurants: [{ id:2, name:"Restaurant 2" }]
        }
        expect(favoritesReducer(initialState, action)).toEqual([])
    });
});