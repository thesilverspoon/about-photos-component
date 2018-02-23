const app = require('./app.js');

const port = 3004;

const server = app.listen(port, () => {});

module.exports = server;
