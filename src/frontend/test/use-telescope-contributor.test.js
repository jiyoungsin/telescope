import { renderHook } from '@testing-library/react-hooks';
import useTelescopeContributor from '../src/hooks/use-telescope-contributor';

describe('Use telescope contributor test', () => {
  // test('A single, random contributor is returned from the hook', () => {
  //   const { contributor } = renderHook(() => useTelescopeContributor());
  //   expect(typeof contributor).toBe('object');
  // });
  // test('An error object that is either undefined or an actual Error object', () => {
  //   const { error } = renderHook(() => useTelescopeContributor());
  //   expect(typeof error).toBe('undefined' || typeof Error);
  // });
  test('Write tests for failures of the API', () => {
    expect(() => useTelescopeContributor()).toThrow(Error);
  });
});
