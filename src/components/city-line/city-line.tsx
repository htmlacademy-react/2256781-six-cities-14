import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCityAction } from '../../store';

function CityLine(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((item) => (
              <li className="locations__item" key={item.city}>
                <Link
                  className={cn('locations__item-link tabs__item', {
                    'tabs__item--active': item.city === activeCity,
                  })}
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(setActiveCityAction(item.city));
                  }}
                  to={AppRoute.Main}
                >
                  <span>{item.city}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export { CityLine };
