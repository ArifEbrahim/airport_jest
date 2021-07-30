class Airport {
  constructor () {
    this._hangar = [];
  }
  planes = () => this._hangar;

  land (plane) {
    this._hangar.push(plane);
  }
};

module.exports = Airport;