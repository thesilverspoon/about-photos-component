const mongoose = require('mongoose');
const sampleData = require('../data/sampleData.js');


mongoose.connect('mongodb://localhost/fetcher');

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

sampleData.forEach((data) => {
  data.about.cost = data.about.price;
  data.restaurant = data.name;

  const about = new About(data);
});

const find = (cb) => {
  About.find({}, (err, about) => {
    if (err) {
      console.log('nothing');
      cb(err, null);
    } else {
      console.log('nothing');
      cb(null, about);
    }
  });
};

const findOne = (cb) => {
  About.findOne({}, (err, results) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      console.log(results);
      cb(null, results);
    }
  })
}

module.exports.find = find;
module.exports.findOne = findOne;

