useEffect(() => {
  if (map) {
    const markerGroup = leaflet.layerGroup().addTo(map);

    offers.forEach((offer: Offer) => {
      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon:
              activeOfferId && offer.id === activeOfferId
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
}, [map, offers, activeOfferId]);
