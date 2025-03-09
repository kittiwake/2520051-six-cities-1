import Map from '../map/map';
import SortingList from '../sorting-list/sorting-list';
import CardList from '../card-list/card-list';
import { useAppSelector } from '../hooks';
import { getSortedOffers } from '../../utils';
import { getCity, getFilteredOffers, getSorting } from '../../store/main-data/selectors';
import { memo, useMemo } from 'react';


function MainContent(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const cityOffers = useAppSelector(getFilteredOffers);

  const sorting = useAppSelector(getSorting);
  const currentOffers = useMemo(() => getSortedOffers(cityOffers, sorting), [cityOffers, sorting]);

  const mapData = cityOffers.map((offer) => ({ 'id': offer.id, 'location': offer.location }));
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cityOffers.length} places to stay in {currentCity.name}</b>
        <SortingList/>
        <CardList offers={currentOffers}/>
      </section>
      <div className="cities__right-section">
        <Map key={currentCity.name} mapData={mapData} centerMap={currentCity.location} type='cities' />
      </div>
    </div>
  );
}
const MemorizedMainContent = memo(MainContent);
export default MemorizedMainContent;
