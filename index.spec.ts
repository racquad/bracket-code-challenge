import { isWellFormed } from './index';

describe('isWellFormed', () => {
  test('returns true for well-formed strings', () => {
    expect(isWellFormed('()')).toBeTruthy();
    expect(isWellFormed('([]{})')).toBeTruthy();
    expect(isWellFormed('((()))')).toBeTruthy();
  });

  test('returns false for not well-formed strings', () => {
    expect(isWellFormed('(([[]]()){}')).toBeFalsy();
    expect(isWellFormed('(]')).toBeFalsy();
    expect(isWellFormed('([]')).toBeFalsy();
    expect(isWellFormed('())')).toBeFalsy();
  });
});
