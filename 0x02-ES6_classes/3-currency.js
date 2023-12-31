class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter forthe code attribute
  get code() {
    return this._code;
  }

  // Setter for the code attribute
  set code(newCode) {
    this._code = newCode;
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Setter for the name attribute
  set name(newName) {
    this._name = newName;
  }

  // Method to display full currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
