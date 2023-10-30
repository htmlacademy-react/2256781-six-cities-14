import { useState } from 'react';
import { Card } from '..';
import { TOffer } from '../../types';

type TOfferListProps = {
  offers: TOffer[];
};

function OfferList({ offers }: TOfferListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<TOffer | null>(null);

  function handleCardHover(offer: TOffer | null) {
    setActiveCard(offer);
  }

  return (
    <div
      className="cities__places-list places__list tabs__content"
      data-active-card={activeCard}
    >
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onCardHover={handleCardHover} />
      ))}
    </div>
  );
}

export { OfferList };
