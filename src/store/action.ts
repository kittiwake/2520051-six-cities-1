import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/main';

// const incremenStep = createAction<number>('game/incrementStep');

const setCity = createAction<City>('main/setCity');

const setSorting = createAction<string>('main/setSorting');

export {setCity, setSorting};
