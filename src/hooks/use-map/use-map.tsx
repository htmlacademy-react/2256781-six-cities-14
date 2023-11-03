import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { TOffer } from '../../types';
import { LAYER } from '../../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offer: TOffer
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef<boolean>(false);
  const { latitude, longitude, zoom } = offer.city.location;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      const layer = new TileLayer(LAYER.URL, {
        attribution: LAYER.ATTRIBUTION,
      });
      instance.addLayer(layer);
      setMap(instance);
      isRenderRef.current = true;
    }
  }, [mapRef, latitude, longitude, zoom]);

  return map;
}

export { useMap };
