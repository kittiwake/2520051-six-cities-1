import { PlacesOption } from '../../transfers';
import { useAppSelector, useAppDispatch } from '../../components/hooks';
import { setSorting } from '../../store/action';
import { useState } from 'react';


function SortingList(): JSX.Element {
  const sortingType = useAppSelector((state) => state.sorting);
  const dispatch = useAppDispatch();
  const [isOpened, setOpening] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpening(true)}>
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        {Object.entries(PlacesOption).map(
          ([key, option]) =>
            (
              <li
                className="places__option"
                tabIndex={0}
                key={key}
                onClick={() => {
                  setOpening(false);
                  if (sortingType !== option) {
                    dispatch(setSorting(option));
                  }
                }}
              >
                {option}
              </li>
            )
        )}
      </ul>
    </form>
  );
}

export default SortingList;
