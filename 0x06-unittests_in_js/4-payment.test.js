const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use a stub for Utils.calculateNumber', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);

    const logSpy = sinon.spy(console, 'log');
    const res = sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledWithExactly('The total is: 10')).to.be.true;
    expect(res).to.equal(10);

    calculateNumberStub.restore();
    logSpy.restore();
  });
});
