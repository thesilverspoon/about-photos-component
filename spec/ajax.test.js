jest.mock('jquery');

const ajax = require('../client/src/ajax.js');

describe('a GET ajax function', () => {
  test('test the url', () => {
    ajax.get((err, data) => {
      console.log(data);
      expect(data.inputOptions.url).toBe('/restaurants/:id');
    });
  });
});
