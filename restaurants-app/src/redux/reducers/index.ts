import { combineReducers } from 'redux';
import restaurants from './restaurantsReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  restaurants,
  favorites,
});

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>;
