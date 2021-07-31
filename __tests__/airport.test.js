const Airport = require('../src/airport')
jest.mock('../src/weather')
const Weather = require('../src/weather')

describe('Airport', () => {

  let airport;
  let plane;
  let weather;

  beforeEach(() => {
    weather = new Weather();
    airport = new Airport(weather);
  });

  describe('capacity', () => {
    beforeEach(() => {
      jest.spyOn(weather, 'isStormy').mockReturnValue(false);
    });
    test('it has no planes by default', () => {
      expect(airport.planes()).toEqual([]);
    });
    test('it has a default capacity of 20', () => {
      for(let i = 0; i < 20; i++) {
        airport.land(plane);
      };
      expect(() => { airport.land(plane); }).toThrow('cannot land - airport full');
    });
  });


  describe('under normal conditions', () => {
    beforeEach(() => {
      jest.spyOn(weather, 'isStormy').mockReturnValue(false);
    });
    test('it can land planes', () => {
      airport.land(plane);
      expect(airport.planes()).toContain(plane);
    });
    test('it allows planes to take off', () => {
      airport.land(plane);
      airport.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under stormy conditions', () => {
    beforeEach(() => {
      jest.spyOn(weather, 'isStormy').mockReturnValue(true);
    });
    test('planes cannot take off', () => {
      expect(() => { airport.takeoff(); }).toThrow('cannot takeoff during storm');
    });
    test('planes cannot land', () => {
      expect(() => { airport.land(plane); }).toThrow('cannot land during storm');
    });
  });

});