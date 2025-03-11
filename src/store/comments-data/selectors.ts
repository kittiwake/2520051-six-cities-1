import { NameSpace } from '../../constant';
import { Comment } from '../../types/offer';
import { State } from '../../types/state';


export const getComments = (state: State): Comment[] => state[NameSpace.Comments].comments.slice(0,10);
export const getReviewLoadingStatus = (state: State): boolean => state[NameSpace.Comments].isReviewLoading;
export const getCountComments = (state: State): number => state[NameSpace.Comments].countComments;
export const getCommentsLoadingStatus = (state: State): boolean => state[NameSpace.Comments].isCommentsLoading;
export const getErrorMessage = (state: State): string | null => state[NameSpace.Comments].error;

export const getReview = (state: State): {rating: number; comment: string} => state[NameSpace.Comments].review;
