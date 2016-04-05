var table = function(t) {
  t.increments().primary();
  t.string('name');
  t.timestamps();
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('measurements', table)
           .then(function () {
               console.log('Measurements table is created!');
            });
};

exports.down = function(knex, Promise) {
  return knex.schema
            .dropTable('measurements', table)
            .then(function () {
               console.log('Measurements table was dropped!');
             });
}; 

