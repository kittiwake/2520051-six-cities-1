import { useRef, useEffect } from 'react';
import { Icon, layerGroup } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constant';
import { Location } from '../../types/main';
import useMap from '../hooks/use-map';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../hooks';
import { getActiveCardId } from '../../store/map-process/selectors';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 60],
  iconAnchor: [20, 60]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 60],
  iconAnchor: [20, 60]
});


type MapDataType = {
  id: string;
  location: Location;
}

type MapProps = {
  mapData: MapDataType[];
  centerMap: Location;
  type: 'offer' | 'cities';
}

function Map({mapData, centerMap, type}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);

  const map = useMap(mapRef, centerMap);
  const activeCardId = useAppSelector(getActiveCardId);


  useEffect(() => {
    if (!map){
      return;
    }

    const markerLayer = layerGroup().addTo(map);

    mapData.forEach((item) => {
      const { latitude, longitude } = item.location;
      L.marker([latitude, longitude], {icon: item.id === activeCardId && type !== 'offer' ? currentCustomIcon : defaultCustomIcon})
        .addTo(markerLayer);
    });
    if (type === 'offer') {
      L.marker([centerMap.latitude, centerMap.longitude], {icon: currentCustomIcon }).addTo(markerLayer);
    }

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [mapData, activeCardId, map, type, centerMap]);

  return (
    <section className={`${type}__map map`} ref={mapRef}></section>
  );
}

export default Map;
