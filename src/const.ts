const FAVORITE_QUANTITY = 4;

const OFFER_COUNT = 312;

const MAX_RATING = 5;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {
  FAVORITE_QUANTITY,
  OFFER_COUNT,
  MAX_RATING,
  AppRoute,
  AuthorizationStatus,
};
