import { Helmet } from 'react-helmet-async';
import { Header, Nearby, Offer } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { CSSProperties, useEffect } from 'react';
import {
  assignEmptyOffer,
  getAsyncNearbyPlaces,
  getAsyncOffer,
  getAsyncReviews,
  selectAuthStatus,
  selectNearbyPlaces,
  selectOffer,
} from '../../store';
import { MAX_NEAR_PLACES_COUNT } from '../../const';
import { Spinner } from '../../components/spinner/spinner';

const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

function OfferPage(): JSX.Element {
  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector(selectOffer);
  const authStatus = useAppSelector(selectAuthStatus);
  const nearbyPlaces = useAppSelector(selectNearbyPlaces)?.slice(
    0,
    MAX_NEAR_PLACES_COUNT
  );

  useEffect(() => {
    if (offerId) {
      dispatch(getAsyncOffer(offerId));
      dispatch(getAsyncNearbyPlaces(offerId));
      dispatch(getAsyncReviews(offerId));
    }

    return () => {
      dispatch(assignEmptyOffer());
    };
  }, [offerId, dispatch]);

  if (!currentOffer) {
    return (
      <Spinner
        color="#4481c3"
        width={10}
        height={200}
        cssOverride={override}
        margin={10}
      />
    );
  }

  const { title, id } = currentOffer;

  return (
    <div className="page">
      <Helmet>
        <title>{`6 Cities - Offer ${id}: ${title}`}</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <Offer
          nearbyPlaces={nearbyPlaces}
          offer={currentOffer}
          authStatus={authStatus}
        />
        <div className="container">
          <Nearby offers={nearbyPlaces} />
        </div>
      </main>
    </div>
  );
}

export { OfferPage };
