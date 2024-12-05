import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { reviewRatings } from '../../constant';

function ReviewsForm() {
  const [reviewState, setReviewState] = useState({
    rating: 0,
    review: ''
  });
  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {reviewRatings.map(({rating, title}) => {
          const id = `${rating}-stars`;
          return (
            <Fragment key={rating}>
              <input className="form__rating-input visually-hidden" name="rating" value={`${rating}`} id={id} type="radio"
                onChange={() => {
                  setReviewState((prevReviewState) => ({
                    ...prevReviewState,
                    rating: rating,
                  }));
                }}
              />
              <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewState.review}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setReviewState((prevReviewState) => ({
            ...prevReviewState,
            review: target.value
          }));
          target.textContent = reviewState.review;
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={reviewState.rating === 0 || reviewState.review.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
