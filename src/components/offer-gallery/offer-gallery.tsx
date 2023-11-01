import { OFFER_GALLERY_QUANTITY } from '../../const';
import { TOffer } from '../../types';

type TOfferGalleryProps = {
  offer: TOffer;
};

function OfferGallery({ offer }: TOfferGalleryProps): JSX.Element {
  const { title, images } = offer;
  return (
    <div className="offer__gallery">
      {images.filter((_, index) => index < OFFER_GALLERY_QUANTITY).map((image) => (
        <div className="offer__image-wrapper" key={image}>
          <img className="offer__image" src={image} alt={title} />
        </div>
      ))}
    </div>
  );
}

export { OfferGallery };
