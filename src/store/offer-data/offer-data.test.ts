import { State } from '../../types/state';
import { generateMockOffer, generateOfferInfo } from '../mock';
import { getNearest, getNearestLoadingStatus, getOffer, getOfferLoadingStatus } from './selectors';

const mockOffer = generateOfferInfo();
const mockNearest = Array.from({ length: 3 }, generateMockOffer);

const mockState: Partial<State> & { OFFER: State['OFFER'] } = {
  OFFER: {
    currentOffer: mockOffer,
    nearestOffers: mockNearest,
    isDataLoading: false,
    isNearestLoading: false,
    error: null,
  },
} as const;


describe('Offer selectors', () => {

  it('should get current offer', () => {
    expect(getOffer(mockState)).toEqual(mockState.OFFER.currentOffer);
  });

  it('should get nearest offers', () => {
    expect(getNearest(mockState)).toEqual(mockState.OFFER.nearestOffers.slice(0, 3));
  });

  it('should get nearest loading status', () => {
    expect(getNearestLoadingStatus(mockState)).toBe(mockState.OFFER.isNearestLoading);
  });

  it('should get offer loading status', () => {
    expect(getOfferLoadingStatus(mockState)).toBe(mockState.OFFER.isDataLoading);
  });
});
