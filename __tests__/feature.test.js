let Plane = require('../src/plane')
let Airport = require('../src/airport')

describe('Feature Test:', () => {
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed

  test('planes can be instructed to land at an airport', () => {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

  test('planes can be instructed to take off', () => {
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy

  test('planes are prevented from taking off when stormy', () => {
    jest.spyOn(airport, 'isStormy').mockReturnValue(true);
    plane.land(airport);
    expect( ()=> { plane.takeoff(); }).toThrow('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
});

