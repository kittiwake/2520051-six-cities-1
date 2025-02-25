import { useAppSelector } from '../hooks';
import { Link } from 'react-router-dom';
import CardList from '../card-list/card-list';
import { filterFavoriteOffers } from '../../store/selectrors';


function FavoriteList(): JSX.Element {
  const favorites = useAppSelector(filterFavoriteOffers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favorites.map((favoriteItem) => (
          favoriteItem.offers.length) ? (
            <li className="favorites__locations-items" key={favoriteItem.city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link to="#" className="locations__item-link">
                    <span>{favoriteItem.city}</span>
                  </Link>
                </div>
              </div>
              <CardList offers={favoriteItem.offers} typeContent='favorites'/>
            </li>
          ) : null
        )}
      </ul>
    </section>
  );
}

export default FavoriteList;
