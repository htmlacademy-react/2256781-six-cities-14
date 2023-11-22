import { Helmet } from 'react-helmet-async';
import { Header, Nearby, Offer } from '../../components';
import { NotFoundPage } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  assignEmptyOffer,
  getAsyncNearbyPlaces,
  getAsyncOffer,
  getAsyncReviews,
  selectAuthStatus,
  selectOffer,
} from '../../store';
import { AuthorizationStatus } from '../../const';

function OfferPage(): JSX.Element {
  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector(selectOffer);
  const authStatus = useAppSelector(selectAuthStatus);
  const shouldShowReviews = authStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    if (offerId) {
      dispatch(getAsyncOffer(offerId));
      dispatch(getAsyncNearbyPlaces(offerId));
      if (shouldShowReviews) {
        dispatch(getAsyncReviews(offerId));
      }
    }

    return () => {
      dispatch(assignEmptyOffer());
    };
  }, [offerId, shouldShowReviews, dispatch]);

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const { title, id } = currentOffer;

  return (
    <div className="page">
      <Helmet>
        <title>{`6 Cities - Offer ${id}: ${title}`}</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <Offer offer={currentOffer} />
        <div className="container">
          <Nearby />
        </div>
      </main>
    </div>
  );
}

export { OfferPage };
