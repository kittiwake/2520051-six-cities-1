import { State } from '../types/state';
import { cities } from '../constant';
import { Offer } from '../types/main';

type FavoriteOffersByCity = {
  city: string;
  offers: Offer[];
}[];
const filterFavoriteOffers = (state: State): FavoriteOffersByCity => {
  const favorites: FavoriteOffersByCity = [];
  cities.map((city) => {
    favorites.push(
      {
        city: city.name,
        offers: state.favorites.filter((favorite) => favorite.city.name === city.name),
      }
    );
  });
  return favorites;
};

export { filterFavoriteOffers };
