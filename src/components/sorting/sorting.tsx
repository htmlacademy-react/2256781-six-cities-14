import { KeyboardEvent, useState } from 'react';
import { TSorting } from '../../types';
import { SORTING_MAP } from '../../const';
import cn from 'classnames';

type TSortingProps = {
  activeSorting: TSorting;
  onChange: (newSorting: TSorting) => void;
};

function Sorting({ activeSorting, onChange }: TSortingProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`,
  };

  function handleKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function handleSortingItemClick(type: TSorting) {
    onChange(type);
    setIsOpened(false);
  }

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeydown}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        &nbsp;{SORTING_MAP[activeSorting]}
        <svg
          className="places__sorting-arrow"
          width={7}
          height={4}
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isOpened,
        })}
      >
        {(
          Object.entries(SORTING_MAP) as [
            TSorting,
            (typeof SORTING_MAP)[TSorting]
          ][]
        ).map(([type, label]) => (
          <li
            key={type}
            className="places__option places__option--active"
            tabIndex={0}
            onClick={() => handleSortingItemClick(type)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { Sorting };
