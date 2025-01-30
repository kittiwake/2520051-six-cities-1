import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/main';

const setCity = createAction<City>('main/setCity');

const setSorting = createAction<string>('main/setSorting');
const setActiveCardId = createAction<string | null>('map/setActiveCardId');

const loadOffers = createAction<Offers>('data/loadOffers');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');


export {setCity, setSorting, setActiveCardId, loadOffers};
