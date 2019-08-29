import pkg from '../src';

describe('import npm-pkg-json', () => {
  it('should import the package.json file', async () => {
    expect(pkg.name).toBe('npm-pkg-json');
  });
});
