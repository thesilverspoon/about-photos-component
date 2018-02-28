const $ = require('jquery');

const get = (cb) => {
  $.ajax({
    url: '/restaurants/:id',
    method: 'GET',
    success: (data) => {
      console.log('success', data);
      cb(null, data);
    },
  });
};

module.exports.get = get;
