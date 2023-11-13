import { Helmet } from 'react-helmet-async';
import { Header, NearList, Offer } from '../../components';
import { NotFoundPage } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  dropOfferAction,
  fetchNearPlacesAction,
  fetchOfferAction,
} from '../../store';

function OfferPage(): JSX.Element {
  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector((state) => state.offer);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchNearPlacesAction(offerId));
    }

    return () => {
      dispatch(dropOfferAction());
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
          <NearList />
        </div>
      </main>
    </div>
  );
}

export { OfferPage };
