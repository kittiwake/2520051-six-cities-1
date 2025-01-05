import { State, AppDispatch } from '../../types/state';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';


export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
