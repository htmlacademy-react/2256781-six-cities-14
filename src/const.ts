const FAVORITE_QUANTITY = 4;

const CARD_COUNT = 5;

const OFFER_COUNT = 312;

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
  CARD_COUNT,
  OFFER_COUNT,
  AppRoute,
  AuthorizationStatus,
};
