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

  test('it allows planes to take off', () => {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes()).not.toContain(plane);
  })

  test('it can check for stormy weather', () => {
    expect(airport.isStormy()).toBe(false);
  })

  describe('under stormy conditions', () => {
    test('planes cannot take off', () => {
      jest.spyOn(airport, 'isStormy').mockReturnValue('true');
      expect(() => { airport.takeoff(); }).toThrow('cannot takeoff during storm');
    })
  })

});