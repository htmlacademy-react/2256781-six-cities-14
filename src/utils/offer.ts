import { getRandomInteger } from '.';
import { MAX_RATING } from '../const';
import { CITIES } from '../const';
import { TCityName, TOfferId, TOfferPreview, TOffersPreview } from '../types';

function calculateRating(rating: number): string {
  return `${Math.round(rating) * 100 / MAX_RATING}%`;
}

function getActiveCityByDefault(): TCityName {
  return CITIES.find((city) => city.active === true)?.city ?? 'Paris';
}

function getRandomCity(): TCityName {
  return CITIES[getRandomInteger(0, CITIES.length - 1)]?.city ?? 'Paris';
}

function getOffersByCity(
  offers: TOffersPreview,
  city: string
): TOffersPreview | [] {
  return offers.filter((offer) => offer?.city?.name === city);
}

function getOfferByID(offers: TOffersPreview, offerID: TOfferId): TOfferPreview | null {
  return offers.find((offer: TOfferPreview) => offer.id === offerID) ?? null;
}

export {
  getActiveCityByDefault,
  calculateRating,
  getOffersByCity,
  getRandomCity,
  getOfferByID,
};
