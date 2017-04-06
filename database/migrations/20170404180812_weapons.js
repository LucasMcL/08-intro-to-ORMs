exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('weapons', function(table) {
			table.increments().primary()
			table.string('weapon_name').notNullable()
		})
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('weapons')
};
