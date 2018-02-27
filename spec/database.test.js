const sampleData = require('../data/sampleData.js');
const db = require('../db/database.js');

describe('seeded data should be inserted properly', () => {
  test('seeded data should be inserted properly', (done) => {
    db.find({}, (err, data) => {
      expect(data.length).toBe(119);
      expect(data[0].photo.length).toBe(3);
      expect(data[3].banner).toBe(sampleData[3].banner);
      expect(data[6].photo).toEqual(expect.arrayContaining(sampleData[6].photo));
      expect(data[8].about.cost).toBe(sampleData[8].about.price);
      done();
    });
  });
});
