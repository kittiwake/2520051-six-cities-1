import classNames from 'classnames';
import { setActiveCardId } from '../../store/action';
import { Offer } from '../../types/main';
import PlaceCard from '../card/card';
import { useAppDispatch, useAppSelector } from '../hooks';

type CardListProps = {
  offers: Offer[];
  typeContent?: 'cities' | 'offer' | 'favorites';
}

function CardList({offers, typeContent = 'cities'}: CardListProps): JSX.Element {
  const activeCardId = useAppSelector((state) => state.activeCardId);
  const dispatch = useAppDispatch();
  function handleCardHover(cardId: string | null): void {
    if (activeCardId !== cardId) {
      dispatch(setActiveCardId(cardId));
    }
  }
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

export default CardList;
