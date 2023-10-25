type TUser = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type TCity = {
  name: string;
  location: TLocation;
}

type TOffer = {
  city: TCity;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: TUser;
  description: string;
  location: TLocation;
  id: number;
}

export { type TOffer };
