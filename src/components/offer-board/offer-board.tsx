import { memo, useState } from 'react';
import { OfferList, Sorting } from '..';
import {
  TCityName,
  TOfferPreview,
  TOffersPreview,
  TSorting,
} from '../../types';
import { sorting } from '../../utils';

type TOfferBoardProps = {
  offers: TOffersPreview;
  cityName: TCityName;
  onCardHover?(offer: TOfferPreview): void;
  onCardLeave?(): void;
};

const OfferListMemo = memo(OfferList);

function OfferBoard({
  offers,
  cityName,
  onCardHover,
  onCardLeave,
}: TOfferBoardProps): JSX.Element {
  const [activeSorting, setActiveSorting] = useState<TSorting>('POPULAR');
  const offerCount = offers.length;

  function handleSortingChange(type: TSorting) {
    setActiveSorting(type);
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offerCount} places to stay in {cityName}
      </b>
      <Sorting activeSorting={activeSorting} onChange={handleSortingChange} />
      <OfferListMemo
        onCardHover={onCardHover}
        onCardLeave={onCardLeave}
        offers={sorting[activeSorting](offers)}
      />
    </section>
  );
}

export { OfferBoard };
