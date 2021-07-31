class Airport {
  constructor () {
    this._hangar = [];
  };

  planes = () => this._hangar;

  land (plane) {
    this._hangar.push(plane);
  };

  takeoff () {
    if (this.isStormy()) {
      throw new Error('cannot takeoff during storm');
    } else {
      this._hangar.pop();
    }
  };

  isStormy () {
    return false;
  }
};

module.exports = Airport;