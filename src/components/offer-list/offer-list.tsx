import { Card } from '..';
import { TOffer } from '../../types';

type TOfferListProps = {
  offers: TOffer[];
  onCardHover?(offer: TOffer): void;
  onCardLeave?(): void;
};

function OfferList({ offers, onCardHover, onCardLeave }: TOfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onCardHover={onCardHover} onCardLeave={onCardLeave}/>
      ))}
    </div>
  );
}

export { OfferList };
