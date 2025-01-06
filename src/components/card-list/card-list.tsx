import PlaceCard from '../../components/card/card';
import { useState } from 'react';

import Map from '../../components/map/map';
import { City, Offer } from '../../types/main';
import SortingList from '../sorting-list/sorting-list';
import { useAppSelector } from '../../components/hooks';
import { getSortedOffers } from '../../utils';

type CardListProps = {
  currentCity: City;
  cityOffers: Offer[];
}


function CardList({currentCity, cityOffers}: CardListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  function handleCardHover(cardId: string | null): void {
    if (activeCardId !== cardId) {
      setActiveCardId(cardId);
    }
  }

  const sorting = useAppSelector((state) => state.sorting);
  const currentOffers = getSortedOffers(cityOffers, sorting);

  const mapData = cityOffers.map((offer) => ({'id': offer.id, 'location': offer.location}));
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cityOffers.length} places to stay in {currentCity.name}</b>
        <SortingList></SortingList>
        <div className="cities__places-list places__list tabs__content">
          {currentOffers.map((cardData) => (
            <PlaceCard
              cardData={cardData}
              key={cardData.id}
              onMouseMove={handleCardHover}
            />)
          )}
        </div>
      </section>
      <div className="cities__right-section">
        <Map key={currentCity.name} mapData={mapData} activeCardId={activeCardId} centerMap={currentCity.location} type='cities'/>
      </div>
    </div>
  );
}

export default CardList;
