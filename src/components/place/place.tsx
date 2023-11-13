import { OfferList, Sort } from '..';
import { TOffer } from '../../types';

type TPlaceProps = {
  offers: TOffer[];
  onCardHover?(offer: TOffer): void;
  onCardLeave?(): void;
};

function Place({ offers, onCardHover, onCardLeave }: TPlaceProps): JSX.Element {
  const offerCount = offers.length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerCount} places to stay in Amsterdam</b>
      <Sort />
      <OfferList onCardHover={onCardHover} onCardLeave={onCardLeave} offers={offers} />
    </section>
  );
}

export { Place };
