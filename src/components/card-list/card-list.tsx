import PlaceCard from '../../components/card/card';
import { PlacesOption } from '../../transfers';
import { useState } from 'react';

import Map from '../../components/map/map';
import { City, Offer } from '../../types/main';

type CardListProps = {
  currentCity: City;
  currentOffers: Offer[];
  isEmpty: boolean;
}


function CardList({currentCity, currentOffers, isEmpty}: CardListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  function handleCardHover(cardId: string | null): void {
    setActiveCardId(cardId);
  }
  if (isEmpty){
    return(
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    );
  }

  const mapData = currentOffers.map((offer) => ({'id': offer.id, 'location': offer.location}));
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            {Object.entries(PlacesOption).map(([key, option]) => <li className="places__option" tabIndex={0} key={key}>{option}</li>)}
          </ul>
        </form>
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
