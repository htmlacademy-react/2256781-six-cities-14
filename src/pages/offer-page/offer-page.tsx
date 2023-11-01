import { Helmet } from 'react-helmet-async';
import { Header, NearPlace, Offer } from '../../components';
import { AuthorizationStatus } from '../../const';
import { TOffer } from '../../types';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '..';

type TOfferPageProps = {
  authorization: AuthorizationStatus;
  offers: TOffer[];
};

function OfferPage({ authorization, offers }: TOfferPageProps): JSX.Element {
  const { id } = useParams();
  const currentOffer = offers.find((el) => el.id === Number(id));

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const { title } = currentOffer;

  return (
    <div className="page">
      <Helmet>
        <title>{`6 Cities - Offer ${id}: ${title}`}</title>
      </Helmet>

      <Header authorization={authorization} />

      <main className="page__main page__main--offer">
        <Offer offer={currentOffer} />
        <div className="container">
          <NearPlace />
        </div>
      </main>
    </div>
  );
}

export { OfferPage };
