import { AuthorizationStatus } from '../../constant';
import { State } from '../../types/state';
import { generateMockUser } from '../mock';
import { getAuthCheckedStatus, getAuthError, getAuthorizationStatus, getUser } from './selectors';

const mockUser = generateMockUser();

const mockState: Partial<State> & { USER: State['USER'] } = {
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: mockUser,
    error: null,
  },
} as const;


describe('User selectors', () => {

  it('should get authorizationStatus', () => {
    const authorizationStatus = getAuthorizationStatus(mockState);
    expect(authorizationStatus).toBe(mockState.USER.authorizationStatus);
  });

  it('should get auth checked status', () => {
    expect(getAuthCheckedStatus(mockState)).toBe(true);
  });

  it('should get user', () => {
    expect(getUser(mockState)).toEqual(mockState.USER.user);
  });

  it('should get error', () => {
    expect(getAuthError(mockState)).toBe(mockState.USER.error);
  });

});
