// migrations/createSnapshots
var table = function(table) {
  table.increments().primary();
  table.integer('time');
  table.integer('temp');
  table.integer('measurement_id')
  .references('id')
  .inTable('measurements');
  table.timestamps();
}

exports.up = function(knex, Promise) {
 return knex.schema
   .createTable('snapshots', table)
   .then(function () {
     console.log('snapshots table is created!');
   });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('snapshots', table)
    .then(function () {
      console.log('snapshots table was dropped!');
    });
};
