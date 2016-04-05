var knexfile = require('./knexfile.js');
var knex = require('knex')(knexfile.development);

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;

/* Add Bookshelf models here:

  require('./models/movie');
  require('./models/director');
  require('./models/genre');

*/
