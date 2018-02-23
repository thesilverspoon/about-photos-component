const request = require('supertest');
const server = require('../server/app.js');

describe('should send back a 200 if static file is found', () => {
  test('It should respond with a 200', (done) => {
    request(server).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('should receive a 404 if route isnt correct', () => {
  test('should receive a 404 from bad url', (done) => {
    request(server).get('/gibberish').then((response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
