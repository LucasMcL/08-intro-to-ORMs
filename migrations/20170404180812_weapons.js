exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('weapons', function(table) {
			table.increments('weapon_id').primary()
			table.string('weapon_name').notNullable()
			table.integer('weapon_strength').notNullable()
		})
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('weapons')
};
