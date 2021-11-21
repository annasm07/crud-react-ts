import Restaurant from "../interfaces/restaurantInterface";

export default function isFavorite(restID:number, favorites:Restaurant[]) {
    return favorites.some(({ id }:{id:number}) => id === restID);
  }