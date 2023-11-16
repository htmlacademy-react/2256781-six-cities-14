import { createAction } from '@reduxjs/toolkit';
import { TCityName, TOffer, TOffersPreview, TReviews, TUserData } from '../types';
import { AuthorizationStatus, NameSpace } from '../const';

const assignOffers = createAction<TOffersPreview>(`${NameSpace.Offers}/assignOffers`);

const assignOffer = createAction<TOffer>(`${NameSpace.Offer}/assignOffer`);

const assignEmptyOffer = createAction(`${NameSpace.Offer}/assignEmptyOffer`);

const assignNearPlaces = createAction<TOffersPreview>(`${NameSpace.NearPlaces}/assignNearPlaces`);

const assignReviews = createAction<TReviews>(`${NameSpace.Reviews}/assignReviews`);

const assignActiveCity = createAction<TCityName>(`${NameSpace.Offers}/assignActiveCity`);

const assignFavorites = createAction<TOffersPreview>(`${NameSpace.Offers}/assignFavorites`);

const assignAuthStatus = createAction<AuthorizationStatus>(`${NameSpace.User}/assignAuthStatus`);

const assignLoadingStatus = createAction<boolean>(`${NameSpace.Loading}/assignLoadingStatus`);

const assignUser = createAction<TUserData>(`${NameSpace.User}/assignUser`);

const assignEmptyUser = createAction(`${NameSpace.User}/assignEmptyUser`);

export { assignOffers, assignOffer, assignNearPlaces, assignReviews, assignEmptyOffer, assignActiveCity, assignFavorites, assignAuthStatus, assignLoadingStatus, assignUser, assignEmptyUser };
