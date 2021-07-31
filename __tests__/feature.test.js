const Plane = require('../src/plane')
const Airport = require('../src/airport')

jest.mock('../src/weather')
const Weather = require('../src/weather')


describe('Feature Test:', () => {
  let plane;
  let airport;
  let weather;

  beforeEach(() => {
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed

  test('planes can be instructed to land at an airport', () => {
    jest.spyOn(weather, 'isStormy').mockReturnValue(false);
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

  test('planes can be instructed to take off', () => {
    jest.spyOn(weather, 'isStormy').mockReturnValue(false);
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy

  test('planes are prevented from taking off when stormy', () => {
    jest.spyOn(weather, 'isStormy').mockReturnValue(false);
    plane.land(airport);
    jest.spyOn(weather, 'isStormy').mockReturnValue(true);
    expect( ()=> { plane.takeoff(); }).toThrow('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when weather is stormy

  test('planes are prevented from landing when stormy', () => {
    jest.spyOn(weather, 'isStormy').mockReturnValue(true);
    expect( ()=> { plane.land(airport); }).toThrow('cannot land during storm');
    expect(airport.planes()).not.toContain(plane);
  });
});

