// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

let Plane = require('../src/plane')
let Airport = require('../src/airport')

describe('Feature Test:', () => {
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  });

  test('planes can be instructed to land at an airport', () => {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

});

