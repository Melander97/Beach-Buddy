var expect = require('chai').expect;
var request = require('request');
var supertest = require('supertest');
var app = require('../server');


describe('app rest api testing', () => {
  it('/api/users status code without passing any params', (done) => {
    request('http://localhost:4000/api/users/', (err, result, body) => {
    expect(result.statusCode).to.equal(404);
    done();
  });
 });
  it('api/users/login to show status code 401 with no credentials', (done) => {
      request('http://localhost:4000/api/users/login', (err, result, body) => {
    expect(result.statusCode).to.equal(401);
    done();
  });
  });

  it('should succeed with proper credentials', function(done){
    supertest(app)
    .post('/api/users/login')
    .send({email:"beach@gmail.com", password: "password"})
    .expect(200, done)
    })

});

