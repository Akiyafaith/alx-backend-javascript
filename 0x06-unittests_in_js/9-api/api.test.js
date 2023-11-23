const { expect } = require('chai');
const request = require('request');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);

describe('index page', () => {
  it('correct status code?', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response) => {
      if (error) done(error);

      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('correct result?', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) done(error);

      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});

describe('cart Page', () => {
  it('should return a 200 status code when :id is a number', () => new Promise((done) => {
    chai.request(app)
      .get('/cart/123')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 123');
        done();
      });
  }));

  it('should return a 404 status code when :id is not a number', () => new Promise((done) => {
    chai.request(app)
      .get('/cart/hello')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  }));
});

after(() => {
  app.close();
});
