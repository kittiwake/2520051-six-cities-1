import { NameSpace } from '../../constant';
import { City, Offers } from '../../types/main';
import { State } from '../../types/state';


export const getCity = (state: State): City => state[NameSpace.Main].city;
export const getSorting = (state: State): string => state[NameSpace.Main].sorting;
export const getOffers = (state: State): Offers => state[NameSpace.Main].offers;
export const getFavorites = (state: State): Offers => state[NameSpace.Main].favorites;
export const getCountFavorites = (state: State): number => state[NameSpace.Main].countFavorites;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Main].isDataLoading;
export const getError = (state: State): string | null => state[NameSpace.Main].error;
