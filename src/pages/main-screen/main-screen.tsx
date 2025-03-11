
import Header from '../../components/widgets/header/header';
import MainContent from '../../components/main-content/main-content';

import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../components/hooks';
import EmptyCardList from '../../components/empty-list/empty-card-list';
import { fetchOffersAction } from '../../store/api-actions';
import { useEffect } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import { getCity, getDataLoadingStatus, getFilteredOffers } from '../../store/main-data/selectors';
import LocationList from '../../components/location-list/location-list';


function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());

  }, [dispatch]);

  const currentCity = useAppSelector(getCity);
  const currentOffers = useAppSelector(getFilteredOffers);
  const isDataLoading = useAppSelector(getDataLoadingStatus);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  const isEmpty = currentOffers.length === 0;
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{currentCity.name}</title>
      </Helmet>
      <Header />
      <main className={`page__main page__main--index ${isEmpty && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList />
        </div>
        <div className="cities">
          {isEmpty
            ? <EmptyCardList />
            : <MainContent />}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
