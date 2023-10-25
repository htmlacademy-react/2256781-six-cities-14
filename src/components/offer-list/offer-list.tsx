import { useState } from 'react';
import { Card } from '..';
import { TOffer } from '../../types';

type TOfferList = {
  offers: TOffer[];
};

function OfferList({ offers }: TOfferList): JSX.Element {
  const [activeCard, setActiveCard] = useState<TOffer | null>(null);

  // ?: Ожидал, что будет при наведении на Card state меняться, а он меняется при клике мыши?
  // ?: data-active-card сделал чтобы линтер не ругался, норм?
  return (
    <div
      className="cities__places-list places__list tabs__content"
      data-active-card={activeCard}
    >
      {offers.map((offer) => {
        const keyValue = offer.id;
        return (
          <Card key={keyValue} offer={offer} mouseOverHandler={setActiveCard} />
        );
      })}
    </div>
  );
}

export { OfferList };
