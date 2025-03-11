import { NameSpace } from '../../constant';
import { State } from '../../types/state';


export const getActiveCardId = (state: State): string | null => state[NameSpace.Map].activeCardId;


