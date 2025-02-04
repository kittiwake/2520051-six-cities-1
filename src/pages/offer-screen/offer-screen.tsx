import Header from '../../components/widgets/header/header';
import RatingWidget from '../../components/widgets/rating-widget';
import PremiumClass from '../../components/widgets/premium-class';
import ReviewsListWidget from '../../components/widgets/review';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import Map from '../../components/map/map';

import { mock, mockItem, mockComments } from '../../mocks';
import { AuthorizationStatus } from '../../constant';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../components/hooks';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import CardList from '../../components/card-list/card-list';
// import { State } from '../../types/state';

const nearestMocks = mock.slice(7, 10);

// const findOffers = (state: State, id: string) => state.offers.find((offer)=> offer.id === id);

function OfferScreen({authorizationStatus}: {authorizationStatus: AuthorizationStatus}): JSX.Element {
  const { id } = useParams<{ id: string }>();
  // const currentOffer = useAppSelector((state) => id ? findOffers(state, id) : []); // не получилось
  const offers = useAppSelector((state) => state.offers);
  const currentOffer = offers.find((offer) => offer.id === id);
  if(!currentOffer){
    return (
      <NotFoundScreen></NotFoundScreen>
    );
  }
  const centerMap = currentOffer.location;
  const mapData = nearestMocks.map((offer) => ({'id': offer.id, 'location': offer.location}));

  return (
    <div className="page">
      <Helmet>
        <title>{mockItem.title}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {mockItem.images.map((img) => (
                <div className="offer__image-wrapper" key={img}>
                  <img className="offer__image" src={img} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumClass type='offer' />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {mockItem.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <RatingWidget rating={mockItem.rating} type='offer' showValue />

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {mockItem.type[0].toUpperCase() + mockItem.type.substring(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {mockItem.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {mockItem.maxAdults} adults
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">&euro;{mockItem.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {mockItem.goods.map((item) => (
                    <li className="offer__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={mockItem.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {mockItem.host.name}
                  </span>
                  <span className="offer__user-status">
                    {mockItem.host.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {mockItem.description}
                  </p>
                  <p className="offer__text">
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ReviewsListWidget {...mockComments} />
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm/>}
              </section>
            </div>
          </div>
          <Map mapData={mapData} centerMap={centerMap} type='offer'/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList offers={nearestMocks} typeContent='offer'></CardList>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
