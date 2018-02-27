const $ = require('jquery');

const get = (cb) => {
  $.ajax({
    url: '/restaurants/:id',
    type: 'GET',
    success: (data) => {
      console.log('success', data);
      cb(data);
    },
  });
};

module.exports.get = get;
