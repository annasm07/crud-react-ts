import { combineReducers } from 'redux';
import restaurants from './restaurantsReducer';

const rootReducer = combineReducers({
  restaurants,
});

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>;
