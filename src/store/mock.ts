import { name, image, random, datatype, lorem } from 'faker';
import { AuthorizationStatus, cities, initReview } from '../constant';
import { PlacesOption } from '../transfers';
import { State } from '../types/state';

export const generateMockOffer = () => ({
  id: datatype.uuid(),
  title: lorem.sentence(),
  type: random.arrayElement(['apartment', 'room', 'house', 'hotel']),
  price: datatype.number({ min: 50, max: 500 }),
  previewImage: image.imageUrl(640, 480, 'city', true),
  city: {
    name: random.arrayElement(cities).name,
    location: {
      latitude: datatype.float({ min: 40, max: 60, precision: 0.0001 }),
      longitude: datatype.float({ min: -10, max: 10, precision: 0.0001 }),
      zoom: datatype.number({ min: 10, max: 15 }),
    },
  },
  location: {
    latitude: datatype.float({ min: 40, max: 60, precision: 0.0001 }),
    longitude: datatype.float({ min: -10, max: 10, precision: 0.0001 }),
    zoom: datatype.number({ min: 10, max: 15 }),
  },
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.float({ min: 1, max: 5, precision: 0.1 }),
});

const generateOfferInfo = () => ({
  ...generateMockOffer(),
  description: lorem.paragraph(),
  images: Array.from({ length: 6 }, () => image.imageUrl(640, 480, 'city', true)),
  goods: random.arrayElements(
    ['Wi-Fi', 'Heating', 'Kitchen', 'TV', 'Coffee machine', 'Towels', 'Fridge', 'Washing machine'],
    datatype.number({ min: 3, max: 6 })
  ),
  host: {
    isPro: datatype.boolean(),
    name: name.firstName(),
    avatarUrl: image.avatar(),
  },
  bedrooms: datatype.number({ min: 1, max: 5 }),
  maxAdults: datatype.number({ min: 1, max: 4 }),
});

const mockOffers = Array.from({ length: 5 }, generateMockOffer);
const mockFavorites = mockOffers.filter((offer) => offer.isFavorite);

export const mockState: State = {
  MAIN: {
    city: cities[0],
    sorting: PlacesOption.POPULAR,
    offers: mockOffers,
    favorites: mockFavorites,
    countFavorites: mockFavorites.length,
    isDataLoading: false,
    error: null,
  },
  OFFER: {
    currentOffer: generateOfferInfo(),
    nearestOffers: Array.from({ length: 3 }, generateMockOffer),
    isDataLoading: false,
    isNearestLoading: false,
    error: null,
  },
  COMMENTS: {
    comments: [],
    countComments: 0,
    review: {
      rating: initReview.rating,
      comment: initReview.comment,
    },
    isCommentsLoading: false,
    isReviewLoading: false,
    error: null,
  },
  MAP: {
    activeCardId: null,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null,
    error: null,
  },
};
