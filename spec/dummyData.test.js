const dummyData = require('../data/dummydata.v2.js');

// FOR REFERENCE WHEN REVIEWING
// let repoSchema = mongoose.Schema({
//   id: {
//     type: String,
//     unique: true,
//   },
//   restaurant: String,
//   about: {
//     description: String,
//     hours: String,
//     price: String,
//     style: String,
//     phone: string,
//   },
//   banner: String,
//   photo: [],
// });

describe('the length of dummyData should match initial data', () => {
  it('length should be 119', () => {
    expect(dummyData.length).toBe(119);
  });
});

describe('each property should match my schema data type', () => {
  it('the values in my dummyData should equal to the type that was set in schema', () => {
    for (let i = 0; i < dummyData.length; i++) { // to make sure ALL data in my dummy data has the same property rather than dummy[0]
      expect(typeof dummyData[i].id).toBe('number');
      expect(typeof dummyData[i].about).toBe('object');
      expect(typeof dummyData[i].about.description).toBe('string');
      expect(typeof dummyData[i].about.hours).toBe('string');
      expect(typeof dummyData[i].about.price).toBe('string');
      expect(typeof dummyData[i].about.style).toBe('string');
      expect(typeof dummyData[i].about.phone).toBe('string');
      expect(typeof dummyData[i].banner).toBe('string');
      expect(Array.isArray(dummyData[i].photo)).toBe(true);
    }
  });
});

