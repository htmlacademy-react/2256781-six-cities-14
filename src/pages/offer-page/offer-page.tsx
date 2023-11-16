import { Helmet } from 'react-helmet-async';
import { Header, Nearby, Offer } from '../../components';
import { NotFoundPage } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { assignEmptyOffer, getNearbyPlaces, getOffer } from '../../store';

function OfferPage(): JSX.Element {
  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector((state) => state.offer);

  useEffect(() => {
    if (offerId) {
      dispatch(getOffer(offerId));
      dispatch(getNearbyPlaces(offerId));
    }

    return () => {
      dispatch(assignEmptyOffer());
    };
  }, [offerId, dispatch]);

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
