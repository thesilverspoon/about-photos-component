const mocha = require('mocha');
const assert = require('assert');
const Repo = require('./database.js');

describe('should save data', () => {
  it('saves record correctly', (done) => {
    const testModel = new Repo({ id: 1, text: 'test' });

    testModel.save().then(() => {
      assert(testModel.isNew === false); // if it is not new, it is saved to the DB
      done();
    });
  });
});
