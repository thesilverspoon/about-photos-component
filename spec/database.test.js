const sampleData = require('../data/sampleData.js');
const db = require('../db/database.js');

describe('seeded data should be inserted properly', () => {
  test('seeded data should be inserted properly', (done) => {
    db.find({}, (err, data) => {
      expect(data.length).toBe(119);
      expect(data[0].photo.length).toBe(3);
      expect(data[0].about.cost).toBe(sampleData[0].about.price);
      done();
    });
  });
});
