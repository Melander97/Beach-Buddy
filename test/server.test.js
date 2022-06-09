const expect = require('chai').expect;
const request = require('request');
const supertest = require('supertest');
const app = require('../server');

describe('REST api route testing', () => {
  it('/api/users status code 404 if no arguments are given', (done) => {
    request('http://localhost:4000/api/users/', (err, result, body) => {
    expect(result.statusCode).to.equal(404);
    done();
  });
 });
  it('api/users/login to show status code 401 if no credentials are given', (done) => {
      request('http://localhost:4000/api/users/login', (err, result, body) => {
    expect(result.statusCode).to.equal(401);
    done();
  });
  });

  it('api/users/login should succeed with proper credentials', (done) => {
    supertest(app)
    .post('/api/users/login')
    .send({email:"beach@gmail.com", password: "password"})
    .expect(200, done)
    })

});

