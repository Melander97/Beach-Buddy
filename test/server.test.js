var expect = require('chai').expect;
var request = require('request');
describe('app rest api testing', () => {
  it('/api/users status code without passing any params', (done) => {
    request('http://localhost:4000/api/users/', (err, result, body) => {
    expect(result.statusCode).to.equal(404);
    done();
  });
 });
  it('api/users/login to show status code 404', (done) => {
      request('http://localhost:4000/api/users/login', (err, result, body) => {
    expect(result.statusCode).to.equal(401);
    done();
  });
  });
});