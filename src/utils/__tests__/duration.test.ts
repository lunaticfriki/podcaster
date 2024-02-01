import { getDuration } from '../duration';

describe('getDuration test', () => {
  it('should return duration formatted', () => {
    const duration = getDuration(9565000);
    expect(duration).toBe('02h:39m:25s');
  });
});
