import { AuthorizationStatus, NameSpace } from '../../constant';
import { generateMockUser } from '../mock';
import { getAuthCheckedStatus, getAuthError, getAuthorizationStatus, getUser } from './selectors';

const mockUser = generateMockUser();

describe('User selectors', () => {
  const mockState = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser,
      error: null,
    },
  } as const;

  it('should get authorizationStatus', () => {
    const authorizationStatus = getAuthorizationStatus(mockState);
    expect(authorizationStatus).toBe(mockState[NameSpace.User].authorizationStatus);
  });

  it('should get auth checked status', () => {
    expect(getAuthCheckedStatus(mockState)).toBe(true);
  });

  it('should get user', () => {
    expect(getUser(mockState)).toEqual(mockState[NameSpace.User].user);
  });

  it('should get error', () => {
    expect(getAuthError(mockState)).toBe(mockState[NameSpace.User].error);
  });

});
