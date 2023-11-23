const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    logSpy.restore();
  });
  it('should log the correct output when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  });
  it('should log the correct output when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(logSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  });
});
