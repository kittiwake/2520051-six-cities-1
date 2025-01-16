import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/main';

const setCity = createAction<City>('main/setCity');

const setSorting = createAction<string>('main/setSorting');
const setActiveCardId = createAction<string | null>('map/setActiveCardId');


export {setCity, setSorting, setActiveCardId};
