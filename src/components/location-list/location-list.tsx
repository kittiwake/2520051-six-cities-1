import { Link } from 'react-router-dom';
import { cities } from '../../constant';
import { getCity } from '../../store/main-data/selectors';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setCity } from '../../store/main-data/main-data';
import { memo } from 'react';

function LocationList(): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {cities.map((city) => (
          <li className='locations__item' key={city.name}>
            <Link
              className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`}
              to='#'
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(setCity(city));
              }}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const MemorizedLocationList = memo(LocationList);
export default MemorizedLocationList;
