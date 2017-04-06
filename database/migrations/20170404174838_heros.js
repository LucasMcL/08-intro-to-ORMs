exports.up = function(knex, Promise) {
	return knex.schema
    .createTable('heros', function(table) {
      table.increments().primary();
      table.string('hero_name').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('heros')
};
