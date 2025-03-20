import { cities, NameSpace } from '../../constant';
import { PlacesOption } from '../../transfers';
import { State } from '../../types/state';
import { generateMockOffer } from '../mock';
import {
  getCity,
  getSorting,
  getOffers,
  getFavorites,
  getCountFavorites,
  getDataLoadingStatus,
  getError,
  getFilterFavoriteOffers,
  getFilteredOffers
} from './selectors';

const mockOffers = Array.from({ length: 5 }, generateMockOffer);
const mockFavorites = mockOffers.filter((offer) => offer.isFavorite);

const mockState: Pick<State, NameSpace.Main> = {
  MAIN: {
    city: cities[0],
    sorting: PlacesOption.POPULAR,
    offers: mockOffers,
    favorites: mockFavorites,
    countFavorites: mockFavorites.length,
    isDataLoading: false,
    error: null,
  },
} as const;


describe('Selectors', () => {

  it('should get city', () => {
    const city = getCity(mockState);
    expect(city).toBe(mockState.MAIN.city);
  });

  it('should get sorting', () => {
    expect(getSorting(mockState)).toBe(mockState.MAIN.sorting);
  });

  it('should get offers', () => {
    expect(getOffers(mockState)).toEqual(mockState.MAIN.offers);
  });

  it('should get favorites', () => {
    expect(getFavorites(mockState)).toEqual(mockState.MAIN.favorites);
  });

  it('should get count of favorites', () => {
    expect(getCountFavorites(mockState)).toBe(mockState.MAIN.countFavorites);
  });

  it('should get data loading status', () => {
    expect(getDataLoadingStatus(mockState)).toBe(mockState.MAIN.isDataLoading);
  });

  it('should get error', () => {
    expect(getError(mockState)).toBe(mockState.MAIN.error);
  });

  // it('should get filtered favorite offers', () => {
  //   expect(getFilterFavoriteOffers(mockState)).toEqual(
  //     mockState.MAIN.favorites.map((offer) => ({
  //       city: offer.city.name,
  //       offers: mockState.MAIN.favorites.filter((fav) => fav.city.name === offer.city.name),
  //     }))
  //   );
  // });

  it('should get filtered offers', () => {
    expect(getFilteredOffers(mockState)).toEqual(
      mockState.MAIN.offers.filter((offer) => offer.city.name === mockState.MAIN.city.name)
    );
  });
});
