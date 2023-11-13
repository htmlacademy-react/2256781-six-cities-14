import { MAX_NEAR_PLACES_COUNT, TYPE_CARD } from '../../const';
import { useAppSelector } from '../../hooks';
import { Card } from '..';

function NearList(): JSX.Element {
  const nearPlaces = useAppSelector((state) => state.nearPlaces)?.slice(
    0,
    MAX_NEAR_PLACES_COUNT
  );

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaces.map((nearPlace) => (
          <Card key={nearPlace.id} offer={nearPlace} type={TYPE_CARD.NEAR} />
        ))}
      </div>
    </section>
  );
}

export { NearList };
