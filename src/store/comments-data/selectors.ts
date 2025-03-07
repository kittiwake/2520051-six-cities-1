import { NameSpace } from '../../constant';
import { Comment } from '../../types/offer';
import { State } from '../../types/state';


export const getCity = (state: State): Comment[] => state[NameSpace.Comments].comments;
export const getReviewLoadingStatus = (state: State): boolean => state[NameSpace.Comments].isReviewLoading;
export const getCountComments = (state: State): number => state[NameSpace.Comments].countComments;
export const getCommentsLoadingStatus = (state: State): boolean => state[NameSpace.Comments].isCommentsLoading;
export const getError = (state: State): string | null => state[NameSpace.Comments].error;
