import { createAction } from '@reduxjs/toolkit';
import { TCityName, TOffer } from '../types';
import { AuthorizationStatus, NameSpace } from '../const';

const fetchOffersAction = createAction(`${NameSpace.Offers}/fetchOffers`);

const fetchOfferAction = createAction<TOffer['id']>(`${NameSpace.Offer}/fetchOffer`);

const fetchNearPlacesAction = createAction<TOffer['id']>(`${NameSpace.NearPlaces}/fetchNearPlaces`);

const fetchReviewsAction = createAction<TOffer['id']>(`${NameSpace.Reviews}/fetchReviews`);

const dropOfferAction = createAction(`${NameSpace.Offer}/dropOffer`);

const setActiveCityAction = createAction<TCityName>(`${NameSpace.Offers}/setActiveCity`);

const fetchFavoritesAction = createAction(`${NameSpace.Offers}/fetchFavorites`);

const setErrorAction = createAction<string | null>(`${NameSpace.Data}/setError`);

const requireAuthorizationAction = createAction<AuthorizationStatus>(`${NameSpace.User}/requireAuthorization`);

export { fetchOffersAction, fetchOfferAction, fetchNearPlacesAction, fetchReviewsAction, dropOfferAction, setActiveCityAction, fetchFavoritesAction, setErrorAction, requireAuthorizationAction };
