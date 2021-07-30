let Airport = require('../src/airport')

describe('Airport', () => {

  let airport;
  let plane;

  beforeEach(() => {
    airport = new Airport();
    plane = jest.fn();
  });

  test('it has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });

  test('it can land planes', () => {
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });

});