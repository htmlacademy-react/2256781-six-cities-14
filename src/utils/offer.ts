import { MAX_RATING } from '../const';
import { CITIES } from '../const';
import { TCityName, TOffersPreview } from '../types';

const calculateRating = (rating: number): string =>
  `${(rating * 100) / MAX_RATING}%`;

const getActiveCityByDefault = (): TCityName => CITIES.find((city) => city.active === true)?.city ?? 'Paris';

function getOffersByCity(
  offers: TOffersPreview,
  city: string
): TOffersPreview | [] {
  return offers.filter((offer) => offer?.city?.name === city);
}

export {
  getActiveCityByDefault,
  calculateRating,
  getOffersByCity,
};
