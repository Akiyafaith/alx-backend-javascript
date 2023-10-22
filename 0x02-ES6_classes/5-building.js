function Building(sqft) {
  if (this.constructor === Building) {
    throw new TypeError('Cannot instantiate abstract class.');
  }

  this._sqft = sqft;

  if (typeof this.evacuationWarningMessage !== 'function') {
    throw new TypeError('Class extending Building must override evacuationWarningMessage');
  }
}

Building.prototype.get_sqft = function () {
  return this._sqft;
};

export default Building;
