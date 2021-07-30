let Plane = require('../src/plane')
let Airport = require('../src/airport')
jest.mock('../src/airport')


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

});