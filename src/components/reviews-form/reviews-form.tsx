import { ChangeEvent, FormEvent, Fragment } from 'react';
import { reviewRatings } from '../../constant';
import { addCommentAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setReviewComment, setReviewRaiting } from '../../store/comments-data/conmments-data';
import { getOffer } from '../../store/offer-data/selectors';
import { getErrorMessage, getReview, getReviewLoadingStatus } from '../../store/comments-data/selectors';

function ReviewsForm() {
  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(getOffer);
  const reviewState = useAppSelector(getReview);
  const isReviewLoading = useAppSelector(getReviewLoadingStatus);
  const errorMessage = useAppSelector(getErrorMessage);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!currentOffer || !reviewState.rating || !reviewState.comment) {
      return;
    }
    dispatch(addCommentAction({
      offerId: currentOffer.id,
      comment: reviewState.comment,
      rating: reviewState.rating,
    }));
  };

  return (
    <form className="reviews__form form"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {reviewRatings.map(({rating, title}) => {
          const id = `${rating}-stars`;
          return (
            <Fragment key={rating}>
              <input className="form__rating-input visually-hidden" name="rating" value={`${rating}`} id={id} type="radio"
                disabled={isReviewLoading}
                checked={reviewState.rating === rating}
                onChange={() => {
                  dispatch(setReviewRaiting(rating));
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
        value={reviewState.comment}
        disabled={isReviewLoading}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          dispatch(setReviewComment(target.value.slice(0, 300)));
          target.textContent = reviewState.comment;
        }}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={reviewState.rating === 0 || reviewState.comment.length < 50 || isReviewLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;

