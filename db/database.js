const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');


// stubbing out this actual schema for my real data
// let repoSchema = mongoose.Schema({
//   id: {
//     type: String,
//     unique: true,
//   },
//   restaurant: String,
//   about: {
//     description: String,
//     hours: String,
//     cost: String,
//     style: String,
//     phone: Number,
//   },
//   banner: String,
//   photo: [],
// });


const testSchema = mongoose.Schema({
  id: Number,
  text: String,
});


const Repo = mongoose.model('Repo', testSchema);

const testModel = new Repo({ id: 1, text: 'test' });

testModel.save();

module.exports = Repo;
