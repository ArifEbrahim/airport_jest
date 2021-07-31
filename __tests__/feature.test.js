const Plane = require('../src/plane')
const Airport = require('../src/airport')

describe('Feature Test:', () => {
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  });

  describe('when not stormy', () => {
    beforeEach(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0);
    })

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
    // I want to prevent landing when the airport is full 

    it('has a default capacity of 20', () => {
      for(let i = 0; i < 20; i++) {
        plane.land(airport);
      };
      expect(()=> { plane.land(airport); }).toThrow('cannot land - airport full');
    });

    // As the system designer
    // So that the software can be used for many different airports
    // I would like a default airport capacity that can be overridden as appropriate

    it('has a variable capacity', () => {
      airport = new Airport(undefined, 30)
      for(let i = 0; i < 30; i++) {
        plane.land(airport);
      };
      expect(() => { plane.land(airport); }).toThrow('cannot land - airport full');
    });
  });

  describe('when stormy', () => {

    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy

    test('planes are prevented from taking off when stormy', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0);
      plane.land(airport);
      jest.spyOn(global.Math, 'random').mockReturnValue(1);
      expect( ()=> { plane.takeoff(); }).toThrow('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy

    test('planes are prevented from landing when stormy', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(1);
      expect( ()=> { plane.land(airport); }).toThrow('cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });
  })
});

