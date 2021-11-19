import actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function loadRestaurants() {
  return {
    type: actionTypes.LOAD_ALL_RESTAURANTS,
    restaurants: [{ name: 'This is a rest name 1' }, { name: 'This is a rest name 2' }],
  };
}
