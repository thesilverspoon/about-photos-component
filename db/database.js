const mongoose = require('mongoose');
const sampleData = require('../data/sampleData.js');

mongoose.connect('mongodb://localhost/fetcher');

const db = mongoose.connect;


const aboutSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  restaurant: String,
  about: {
    description: String,
    hours: String,
    cost: String,
    style: String,
    phone: String,
  },
  banner: String,
  photo: [],
});


const About = mongoose.model('About', aboutSchema);

let count = 0;

sampleData.forEach((data) => {
  data.about.cost = data.about.price;

  const about = new About(data);

  about.save((err) => {
    if (err) {
    // console.log(err);
    }
    count += 1;
    if (count === 119) {
      mongoose.disconnect();
    }
  });
});

const find = (cb) => {
  About.find({}, cb);
};

module.exports = find;
