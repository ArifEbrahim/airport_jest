class Weather {
  constructor () {
    this._CHANCE_OF_STORM = 0.5;
  };

  isStormy () {
   return (Math.random() > this._CHANCE_OF_STORM); 
  }
}

module.exports = Weather;