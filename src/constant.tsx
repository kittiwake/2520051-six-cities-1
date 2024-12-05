export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const reviewRatings = [
  {
    rating: 5,
    title: 'perfect'
  },
  {
    rating: 4,
    title: 'good'
  },
  {
    rating: 3,
    title: 'not bad'
  },
  {
    rating: 2,
    title: 'badly'
  },
  {
    rating: 1,
    title: 'terribly'
  },
];
