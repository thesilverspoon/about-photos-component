const $ = require('jquery');

const get = (id, cb) => {
  $.ajax({
    url: `/restaurants/${id}`,
    method: 'GET',
    success: (data) => {
      console.log(typeof data);
      cb(null, data);
    },
  });
};

module.exports.get = get;
