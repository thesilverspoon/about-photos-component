const $ = require('jquery');

const get = (id, cb) => {
  $.ajax({
    url: `/restaurants/${id}`,
    method: 'GET',
    success: (data) => {
      cb(null, data);
    },
  });
};

module.exports.get = get;
