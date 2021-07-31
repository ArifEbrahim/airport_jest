const Weather = require("./weather");

class Airport {
  constructor (weather = new Weather(), capacity = 20) {
    this._capacity = capacity;
    this._weather = weather;
    this._hangar = [];
  };

  planes = () => this._hangar;

  land (plane) {
    if (this._weather.isStormy()) {
      throw new Error('cannot land during storm');
    } else if (this._hangar.length === this._capacity) {
      throw new Error('cannot land - airport full');
    }
    this._hangar.push(plane);
  };

  takeoff () {
    if (this._weather.isStormy()) {
      throw new Error('cannot takeoff during storm');
    } 
    this._hangar.pop();
  };
};

module.exports = Airport;