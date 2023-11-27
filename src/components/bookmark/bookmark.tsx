type TBookmarkProps = {
  enabled: boolean;
  actionClass: string;
  imageClass: string;
  imageWidth?: string;
  imageHeight?: string;
  onMarkChange?: () => void;
};

function Bookmark({
  enabled,
  actionClass,
  imageClass,
  imageWidth = '18',
  imageHeight = '19',
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
      <span className="visually-hidden">
        {enabled ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export { Bookmark };
