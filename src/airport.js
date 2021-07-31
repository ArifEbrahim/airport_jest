class Airport {
  constructor () {
    this._hangar = [];
  };

  planes = () => this._hangar;

  land (plane) {
    this._hangar.push(plane);
  };

  takeoff () {
    this._hangar.pop();
  };
};

module.exports = Airport;