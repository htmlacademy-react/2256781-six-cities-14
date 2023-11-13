import { TOffer } from '../types';

const offer: TOffer = {
  id: '2',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: [
    'Heating',
    'Coffee machine',
    'Cable TV',
  ],
  host: {
    name: 'Angelina',
    avatarUrl: 'https://14.design.pages.academy/static/host/avatar-angelina.jpg',
    isPro: true,
  },
  images: [
    'https://14.design.pages.academy/static/hotel/16.jpg',
    'https://14.design.pages.academy/static/hotel/5.jpg',
    'https://14.design.pages.academy/static/hotel/15.jpg',
    'https://14.design.pages.academy/static/hotel/8.jpg',
    'https://14.design.pages.academy/static/hotel/1.jpg',
    'https://14.design.pages.academy/static/hotel/6.jpg'
  ],
  maxAdults: 4
};

function getOffer() {
  return offer;
}
export { getOffer };
