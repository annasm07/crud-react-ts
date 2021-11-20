export interface actionTypesInterface {
    LOAD_ALL_RESTAURANTS: string,
    ADD_TO_FAVORITES: string,
    LOAD_ALL_FAVORITES:string,
    DELETE_FROM_FAVORITES: string,
    }

const restaurantsActionTypes: actionTypesInterface = {
  LOAD_ALL_RESTAURANTS: 'LOAD_ALL_RESTAURANTS',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  LOAD_ALL_FAVORITES: 'LOAD_ALL_FAVORITES',
  DELETE_FROM_FAVORITES: 'DELETE_FROM_FAVORITES',
};

export default restaurantsActionTypes;
