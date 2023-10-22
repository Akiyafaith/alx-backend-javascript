class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new TypeError('Cannot instantiate abstract class.');
    }

    this._sqft = sqft;

    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  get_sqft() {
    return this._sqft;
  }
}

export default Building;
