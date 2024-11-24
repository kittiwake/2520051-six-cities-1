type PlaceCardItem = {
    id: string;
    title: string;
    type: string;
    price: number;
    previewImage: string;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
}

type PlaceCardProps = {
  dataObj: PlaceCardItem;
}
function PremiumClass() {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

export default function PlaceCard({dataObj}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {dataObj.isPremium && <PremiumClass/>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={dataObj.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{dataObj.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${dataObj.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${dataObj.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{dataObj.title}</a>
        </h2>
        <p className="place-card__type">{dataObj.type}</p>
      </div>
    </article>
  );
}
