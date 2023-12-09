import { useEffect, useRef } from 'react';
import {
  DEFAULT_COORDINATE_MAP,
  DEFAULT_OFFER,
  MAP_MARKER_CURRENT,
  MAP_MARKER_DEFAULT,
  MapType,
} from '../../const';
import { useMap } from '../../hooks';
import { TOffer, TOfferPreview, TOffersPreview } from '../../types';
import leaflet, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  activeOffer: TOfferPreview | TOffer | null;
  offers?: TOffersPreview | [];
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
  activeOffer,
  offers = [],
  type = MapType.City,
}: TMapProps): JSX.Element {
  const markedOfferId = activeOffer?.id;
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, DEFAULT_OFFER as TOffer);

  useEffect(() => {
    if (map) {
      const mapCity = offers.length
        ? offers[0].city.location
        : DEFAULT_COORDINATE_MAP;

      map.setView(
        {
          lat: mapCity.latitude,
          lng: mapCity.longitude,
        },
        mapCity.zoom
      );
    }
  }, [map, offers]);

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);

      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                markedOfferId && offer.id === markedOfferId
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(markerGroup);
      });

      return () => {
        markerGroup.clearLayers();
      };
    }
  }, [map, offers, markedOfferId]);

  return <section className={`${type} map`} ref={mapRef} data-testid="map-section"></section>;
}

export { Map };
