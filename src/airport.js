class Airport {
  constructor () {
    this._hangar = [];
  };

  planes = () => this._hangar;

  land (plane) {
    if (this.isStormy()) {
      throw new Error('cannot land during storm');
    } 
    this._hangar.push(plane);
  };

  takeoff () {
    if (this.isStormy()) {
      throw new Error('cannot takeoff during storm');
    } 
    this._hangar.pop();
  };

  isStormy () {
    return false;
  }
};

module.exports = Airport;