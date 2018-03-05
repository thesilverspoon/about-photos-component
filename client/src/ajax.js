const $ = require('jquery');

const get = (id, cb) => {
  $.ajax({
    url: `http://localhost:3004/restaurants/${id}`,
    method: 'GET',
    success: (data) => {
      cb(null, data);
    },
  });
};

module.exports.get = get;
