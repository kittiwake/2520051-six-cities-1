import { State } from '../../types/state';
import { generateMockComment } from '../mock';
import {
  getComments,
  getReviewLoadingStatus,
  getCountComments,
  getCommentsLoadingStatus,
  getErrorMessage,
  getReview,
} from './selectors';

const mockComments = Array.from({ length: 10 }, generateMockComment);

const mockState: Partial<State> & { COMMENTS: State['COMMENTS'] } = {
  COMMENTS: {
    comments: mockComments,
    countComments: mockComments.length,
    review: { rating: 5, comment: 'Great place!' },
    isCommentsLoading: false,
    isReviewLoading: false,
    error: null,
  },
} as const;


describe('Comments selectors', () => {

  it('should get comments', () => {
    expect(getComments(mockState)).toEqual(mockState.COMMENTS.comments.slice(0, 10));
  });

  it('should get review loading status', () => {
    expect(getReviewLoadingStatus(mockState)).toBe(mockState.COMMENTS.isReviewLoading);
  });

  it('should get count of comments', () => {
    expect(getCountComments(mockState)).toBe(mockState.COMMENTS.countComments);
  });

  it('should get comments loading status', () => {
    expect(getCommentsLoadingStatus(mockState)).toBe(mockState.COMMENTS.isCommentsLoading);
  });

  it('should get error message', () => {
    expect(getErrorMessage(mockState)).toBe(mockState.COMMENTS.error);
  });

  it('should get review', () => {
    expect(getReview(mockState)).toEqual(mockState.COMMENTS.review);
  });

});
