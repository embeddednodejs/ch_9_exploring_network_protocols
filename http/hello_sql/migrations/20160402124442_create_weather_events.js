
var table = function(table) {
   table.increments().primary();
   table.integer('time');
   table.integer('temp');
   table.integer('measurement_id').references('measurements.id');
   table.string('comment');
   table.timestamps();
}


exports.up = function(knex, Promise) {
   return knex.schema
              .createTable('weather_events', table)
              .then(function () {
                 console.log('weather events table is created!');
               });
};

exports.down = function(knex, Promise) {
   return knex.schema
               .dropTable('weather_events', table)
               .then(function () {
                  console.log('weather events table was dropped!');
                });
};
