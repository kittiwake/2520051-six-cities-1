import Map from '../map/map';
import { City, Offer } from '../../types/main';
import SortingList from '../sorting-list/sorting-list';
import CardList from '../card-list/card-list';
import { useAppSelector } from '../hooks';
import { getSortedOffers } from '../../utils';

type CardListProps = {
  currentCity: City;
  cityOffers: Offer[];
}


function MainContent({ currentCity, cityOffers }: CardListProps): JSX.Element {
  const sorting = useAppSelector((state) => state.sorting);
  const currentOffers = getSortedOffers(cityOffers, sorting);

  const mapData = cityOffers.map((offer) => ({ 'id': offer.id, 'location': offer.location }));
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cityOffers.length} places to stay in {currentCity.name}</b>
        <SortingList></SortingList>
        <CardList offers={currentOffers}></CardList>
      </section>
      <div className="cities__right-section">
        <Map key={currentCity.name} mapData={mapData} centerMap={currentCity.location} type='cities' />
      </div>
    </div>
  );
}

export default MainContent;
