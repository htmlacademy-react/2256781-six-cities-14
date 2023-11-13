import { Card } from '..';
import { TOfferPreview, TOffersPreview } from '../../types';

type TOfferListProps = {
  offers: TOffersPreview;
  onCardHover?(offer: TOfferPreview): void;
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
