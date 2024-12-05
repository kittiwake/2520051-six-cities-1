import Header from '../../components/widgets/header/header';
import PlaceCard from '../../components/card/card';
import { PremiumClass, RatingWidget } from '../../components/widgets/widgets';
import ReviewsListWidget from '../../components/widgets/review';
import ReviewsForm from '../../components/reviews-form/reviews-form';

import { mock, mockItem, mockComments } from '../../mocks';
import { AuthorizationStatus } from '../../constant';

const nearestMocks = mock.slice(7, 10);

function GaleryItem({img}: {img: string}): JSX.Element {
  return (
    <div className="offer__image-wrapper" >
      <img className="offer__image" src={img} alt="Photo studio" />
    </div>
  );
}

type OfferFeaturesProps = {
  entire: string;
  bedrooms: number;
  adults: number;
}

function OfferFeatures({ entire, bedrooms, adults }: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {entire[0].toUpperCase() + entire.substring(1)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {adults} adults
      </li>
    </ul>
  );
}

function OfferGoods({ item }: { item: string }) {
  return (
    <li className="offer__inside-item">
      {item}
    </li>

  );
}

function OfferScreen({authorizationStatus}: {authorizationStatus: AuthorizationStatus}): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {mockItem.images.map((img) => <GaleryItem img={img} key={img} />)}
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
              <OfferFeatures entire={mockItem.type} bedrooms={mockItem.bedrooms} adults={mockItem.maxAdults} />
              <div className="offer__price">
                <b className="offer__price-value">&euro;{mockItem.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {mockItem.goods.map((item) => <OfferGoods item={item} key={item} />)}
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
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearestMocks.map((cardData) => <PlaceCard cardData={cardData} key={cardData.id} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
