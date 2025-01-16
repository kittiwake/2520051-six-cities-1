import { mock } from '../../mocks';
import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';
import { Helmet } from'react-helmet-async';
import CardList from '../../components/card-list/card-list';
import { Link } from 'react-router-dom';


const pageMocks = [
  {
    city: 'Amsterdam',
    mocks: mock.slice(0, 3)
  },
  {
    city: 'Hamburg',
    mocks: mock.slice(4, 5)
  }
];

function FavoritesScreen(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {pageMocks.map((mockCityItem) => (
                <li className="favorites__locations-items" key={mockCityItem.city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link to="#" className="locations__item-link">
                        <span>{mockCityItem.city}</span>
                      </Link>
                    </div>
                  </div>
                  <CardList offers={mockCityItem.mocks} typeContent='favorites'></CardList>
                </li>
              ))}

            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesScreen;
