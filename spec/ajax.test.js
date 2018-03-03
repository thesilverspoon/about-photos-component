const ajax = require('../client/src/ajax.js');
const sinon = require('sinon');

console.log(ajax);

describe("with fake server", function() {
  const data = "test";
  let server;

  beforeEach(function () {
    server = sinon.fakeServer.create()
  });

  afterEach(function () {
    server.restore();
  });

  it("fetches with the correct id and url", function () {
    server.respondWith("GET", "/restaurants/90976", [200, {"Content-Type":"application/json"}, JSON.stringify(data)]);
    const callback = jasmine.createSpy('callback');
    ajax.get(90976, callback);
    server.respond();
    expect(callback).toHaveBeenCalled();
  });
});