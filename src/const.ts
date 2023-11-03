const FAVORITE_QUANTITY = 4;

const MAX_RATING = 5;

const OFFER_GALLERY_QUANTITY = 6;

const TYPE_CARD = {
  CITY: {
    className: 'cities__card place-card',
    width: 260,
    height: 200,
    buttonFavorite: {
      className: 'place-card__bookmark-button button',
      span: 'To bookmarks',
    }
  },
  FAVORITES: {
    className: 'favorites__card place-card',
    width: 150,
    height: 110,
    buttonFavorite: {
      className: 'place-card__bookmark-button place-card__bookmark-button--active button',
      span: 'In bookmarks',
    }
  },
};

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/',
}

enum MapType {
  City = 'cities__map',
  Offer = 'offer__map',
}

enum MarkType {
  Card = 'place-card__mark',
  Offer = 'offer__mark',
}

enum StarType {
  Card = 'place-card',
  Offer = 'offer',
  Review = 'reviews',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

//tuple
const RATING_STARS: readonly [string, string, string, string, string] = [
  'terribly', 'badly', 'not bad', 'good', 'perfect'
];

const COMMENT_DATE = 'MMMM YYYY';

const COMMENT_DATE_TIME = 'YYYY-MM-DD';

const MAP_MARKER_DEFAULT = 'img/pin.svg';

const MAP_MARKER_CURRENT = 'img/pin-active.svg';

const LAYER = {
  URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export {
  FAVORITE_QUANTITY,
  MAX_RATING,
  TYPE_CARD,
  RATING_STARS,
  OFFER_GALLERY_QUANTITY,
  COMMENT_DATE,
  COMMENT_DATE_TIME,
  MAP_MARKER_DEFAULT,
  MAP_MARKER_CURRENT,
  LAYER,
  AppRoute,
  AuthorizationStatus,
  MapType,
  MarkType,
  StarType,
};
