import { TOfferId } from '../../types';

type TBookmarkProps = {
  actionClass: string;
  imageClass: string;
  imageWidth?: string;
  imageHeight?: string;
  hiddenDescription: string;
  onMarkChange?: (id: TOfferId, status: boolean) => void;
};

function Bookmark({
  actionClass,
  imageClass,
  imageWidth = '18',
  imageHeight = '19',
  hiddenDescription,
  onMarkChange = () => {},
}: TBookmarkProps): JSX.Element {
  return (
    <button
      className={actionClass}
      type="button"
      onClick={() => onMarkChange()}
    >
      <svg className={imageClass} width={imageWidth} height={imageHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{hiddenDescription}</span>
    </button>
  );
}

export { Bookmark };
