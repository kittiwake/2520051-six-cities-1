import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';
import { Helmet } from 'react-helmet-async';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../components/hooks';
import EmptyFavorites from '../../components/empty-list/empty-favorites';
import FavoriteList from '../../components/favorite-list/favorite-list';
import { getCountFavorites, getDataLoadingStatus } from '../../store/main-data/selectors';


function FavoritesScreen(): JSX.Element {

  const isDataLoading = useAppSelector(getDataLoadingStatus);
  const isEmpty = useAppSelector(getCountFavorites) === 0;

  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header />
      {isDataLoading
        ? <LoadingScreen />
        : (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              {isEmpty
                ? <EmptyFavorites />
                : <FavoriteList />}
            </div>
          </main>
        )}
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
