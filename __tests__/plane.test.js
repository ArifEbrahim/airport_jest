let Plane = require('../src/plane')

jest.mock('../src/airport')
let Airport = require('../src/airport')

describe('Plane', () => {

  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  });

  test('it can land at an airport', () => {
    plane.land(airport);
    expect(airport.land).toHaveBeenCalledWith(plane);
  });

  test('it can take off from an airport', () => {
    plane.land(airport);
    plane.takeoff();
    expect(airport.takeoff).toHaveBeenCalled();
  })

});