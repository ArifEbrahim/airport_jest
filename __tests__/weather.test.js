let Weather = require('../src/weather')

describe('Weather', () => {
  let weather;

  beforeEach(() => {
    weather = new Weather();
  })

  test('gives stormy sometimes', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1);
    expect(weather.isStormy()).toBe(true);
  });

});