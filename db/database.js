const mongoose = require('mongoose');
const sampleData = require('../data/sampleData.js');


mongoose.connect('mongodb://localhost/restaurant');

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
  const obj = { id: '', about: { } };

  obj.id = data.id;
  obj.restaurant = data.name;
  obj.about.description = data.about.description;
  obj.about.hours = data.about.hours;
  obj.about.cost = data.about.price;
  obj.about.style = data.about.style;
  obj.about.phone = data.about.phone;
  obj.banner = data.banner;
  obj.photo = data.photo;

  const about = new About(obj);

  about.save((err, res) => {
    if (err) {
    } else {
      count += 1;
      if (count === 119) {
        mongoose.disconnect();
      }
    }
  });

});

const find = (obj, cb) => {
  About.find(obj, (err, about) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, about);
    }
  });
};

const findOne = (obj, cb) => {
  About.findOne({}, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

module.exports.find = find;
module.exports.findOne = findOne;

