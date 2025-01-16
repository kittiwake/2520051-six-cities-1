
import Header from '../../components/widgets/header/header';
import MainContent from '../../components/main-content/main-content';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { cities } from '../../constant';

import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { setCity } from '../../store/action';
import EmptyCardList from '../../components/card-list/empty-card-list';

function MainScreen(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);
  const dispatch = useAppDispatch();
  const isEmpty = currentOffers.length === 0;
  // const cityLocation = currentCity.location;
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{currentCity.name}</title>
      </Helmet>
      <Header />
      <main className={`page__main page__main--index ${isEmpty && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <li className="locations__item" key={city.name}>
                  <Link
                    className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`}
                    to="#"
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(setCity(city));
                    }}
                  >
                    <span>{city.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {isEmpty
            ? <EmptyCardList></EmptyCardList>
            : <MainContent currentCity={currentCity} cityOffers={currentOffers}/>}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
