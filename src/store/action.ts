import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/main';

// const incremenStep = createAction<number>('game/incrementStep');

const changeCity = createAction<City>('main/changeCity');

export {changeCity};
