class Plane{
  constructor() {
    this._location;
  }

  land = (airport) => {
    airport.land(this);
    this._location = airport;
  }

  takeoff = () => {
    this._location.takeoff();
  };

};

module.exports = Plane;