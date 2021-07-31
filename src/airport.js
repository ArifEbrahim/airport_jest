const Weather = require("./weather");

class Airport {
  constructor (weather = new Weather()) {
    this._weather = weather;
    this._hangar = [];
  };

  planes = () => this._hangar;

  land (plane) {
    if (this._weather.isStormy()) {
      throw new Error('cannot land during storm');
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