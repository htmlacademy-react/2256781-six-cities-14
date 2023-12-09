import { TOfferPreview, TOffersPreview, TSorting } from '../types';

const sortHighToLow = (a: TOfferPreview, b: TOfferPreview) => b.price - a.price;

const sortLowToHigh = (a: TOfferPreview, b: TOfferPreview) => a.price - b.price;

const sortByRating = (a: TOfferPreview, b: TOfferPreview) => b.rating - a.rating;

const sorting: Record<TSorting, (offers: TOffersPreview) => TOffersPreview> = {
  POPULAR: (offers: TOffersPreview) => offers.slice(),
  HTL: (offers: TOffersPreview) => offers.slice().sort(sortHighToLow),
  LTH: (offers: TOffersPreview) => offers.slice().sort(sortLowToHigh),
  TOP: (offers: TOffersPreview) => offers.slice().sort(sortByRating),
};

export { sorting };
