const { expect } = require('chai');
const request = require('request');

describe('index page', () => {
  it('correct status code?', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response) => {
      if (error) return done(error);

      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('correct result?', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);

      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});

after(() => {
  app.close();
});
