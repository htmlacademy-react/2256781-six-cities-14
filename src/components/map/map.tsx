import { useEffect, useRef } from 'react';
import { MAP_MARKER_CURRENT, MAP_MARKER_DEFAULT, MapType } from '../../const';
import { useMap } from '../../hooks';
import { TOffer, TOffers } from '../../types';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  selectedOffer?: TOffer | null;
  offers?: TOffers | [];
  type?: MapType;
};

const defaultCustomIcon = new Icon({
  iconUrl: MAP_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: MAP_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({
  selectedOffer,
  offers = [],
  type = MapType.City,
}: TMapProps): JSX.Element {
  const currentOffer = selectedOffer ?? offers[0];
  const markedOfferId = selectedOffer ? selectedOffer.id : null;
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, currentOffer);

  useEffect(() => {
    if (map) {
      offers.forEach((offer: TOffer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            markedOfferId && offer.id === markedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, markedOfferId]);
  return <section className={`${type} map`} ref={mapRef}></section>;
}

export { Map };
