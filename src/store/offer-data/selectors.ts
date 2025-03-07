import { NameSpace } from '../../constant';
import { Offers } from '../../types/main';
import { OfferInfo } from '../../types/offer';
import { State } from '../../types/state';


export const getOffer = (state: State): OfferInfo | null => state[NameSpace.Offer].currentOffer;
export const getNearest = (state: State): Offers => state[NameSpace.Offer].nearestOffers;
export const getNearestLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isNearestLoading;
export const getOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isDataLoading;
export const getError = (state: State): string | null => state[NameSpace.Offer].error;
