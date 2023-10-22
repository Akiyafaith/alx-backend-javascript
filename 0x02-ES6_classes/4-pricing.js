import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    // check that the 'currency' attribute is an instance of the Currency class
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }

    this._amount = amount;
    this._currency = currency;
  }

  // Getter for the amount attribute
  get amount() {
    return this._amount;
  }

  // Setter for the amount attribute
  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter for the currency attribute
  get currency() {
    return this._currency;
  }

  // Setter for the currency attribute
  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
  }

  // Method to display the full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price using a conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('Amount and conversionRate must be numbers');
  }
}

export default Pricing;
