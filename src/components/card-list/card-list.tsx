import classNames from 'classnames';
import { setActiveCardId } from '../../store/map-process/map-process';
import { Offer } from '../../types/main';
import PlaceCard from '../card/card';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getActiveCardId } from '../../store/map-process/selectors';
import { memo, useCallback } from 'react';

type CardListProps = {
  offers: Offer[];
  typeContent?: 'cities' | 'offer' | 'favorites';
}

function CardList({offers, typeContent = 'cities'}: CardListProps): JSX.Element {
  const activeCardId = useAppSelector(getActiveCardId);
  const dispatch = useAppDispatch();
  const handleCardHover = useCallback((cardId: string | null): void => {
    if (cardId && activeCardId !== cardId) {
      dispatch(setActiveCardId(cardId));
    }
  }, [dispatch]);
  return (
    <div className={classNames(
      {'places__list': typeContent !== 'favorites'},
      {'cities__places-list' : typeContent === 'cities'},
      {'tabs__content' : typeContent === 'cities'},
      {'near-places__list' : typeContent === 'offer'},
      {'favorites__places': typeContent === 'favorites'},
    )}
    >
      {offers.map((cardData) => (
        <PlaceCard
          cardData={cardData}
          key={cardData.id}
          onMouseMove={handleCardHover}
          type={typeContent === 'favorites' ? 'horizontal' : 'vertical'}
        />)
      )}
    </div>
  );
}
const MemorizedCardList = memo(CardList);
export default MemorizedCardList;
