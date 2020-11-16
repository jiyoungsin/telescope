import useTelescopeContributor from '../src/frontend/src/hooks/use-telescope-contributor';
// const useTelescopeContributor = require('../src/frontend/src/hooks/use-telescope-contributor');

jest.mock('../src/backend/utils/indexer');

describe('Use telescope contributor test', () => {
  test('A single, random contributor is returned from the hook', () => {
    const { contributor } = useTelescopeContributor();
    console.log(
      'contributor-----------------------------------------------------------------------'
    );
    console.log(contributor);
    expect(typeof contributor).toBe('object');
  });
  test('An error object that is either undefined or an actual Error object', () => {
    const { error } = useTelescopeContributor();
    console.log(
      'error------------------------------------------------------------------------------'
    );
    console.log(error);
    expect(typeof error).toBe(undefined || typeof Error);
  });
  test('Write tests for failures of the API', () => {
    expect(() => useTelescopeContributor()).toThrow();
  });
});
