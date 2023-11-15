import { MAX_RATING } from '../const';
import { CITIES } from '../const';
import { TCityName, TOffersPreview } from '../types';

function calculateRating(rating: number): string {
  return `${(rating * 100) / MAX_RATING}%`;
}

function getActiveCityByDefault(): TCityName {
  return CITIES.find((city) => city.active === true)?.city ?? 'Paris';
}

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
