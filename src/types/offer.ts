import { TUser } from '.';

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type TCityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

type TCity = {
  name: TCityName;
  location: TLocation;
}

type TOfferPreview = {
  city: TCity;
  previewImage: string;
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  price: number;
  location: TLocation;
  id: string;
}

type TOffer = Omit<TOfferPreview & {
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: TUser;
  description: string;
  images: string[];
}, 'previewImage'>

type TOffersPreview = TOfferPreview[];

export { type TOffer, type TCityName, type TOfferPreview, type TOffersPreview, type TLocation };
