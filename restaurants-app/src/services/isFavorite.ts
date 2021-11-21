import Restaurant from "../interfaces/restaurantInterface";

export default function isFavorite(restID:number, favorites:Restaurant[]) {
  const isAlreadyInFavorite = favorites.some(({ id }:{id:number}) => id === restID);
    return isAlreadyInFavorite;
  }