var table = function(table) {
   table.increments().primary();
   table.integer('time');
   table.string('name');
   table.timestamps();
}


exports.up = function(knex, Promise) {
   return knex.schema
              .createTable('basic_events', table)
              .then(function () {
                 console.log('weather events table is created!');
               });
};

exports.down = function(knex, Promise) {
   return knex.schema
               .dropTable('basic_events', table)
               .then(function () {
                  console.log('weather events table was dropped!');
                });
};
