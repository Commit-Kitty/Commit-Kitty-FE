import { toGetLoading, toGetUserSession } from './useSelectors';

describe('selectors', () => {
  it('can return correct loading info from state', () => {
    const state = {
      loadingReducer: {
        loading: false
      }
    };

    expect(toGetLoading(state)).toEqual(false);
  });

  it('cant return the correct user info from state', () => {
    const state = {
      authReducer: {
        user: null
      }
    };
    expect(toGetUserSession(state)).toEqual(null);
  });
});
