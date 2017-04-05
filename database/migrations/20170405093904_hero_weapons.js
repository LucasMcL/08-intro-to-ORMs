exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('hero_weapons', function(table) {
			table.integer('hero_id').notNullable()
			table.integer('weapon_id').notNullable()

			table.foreign('hero_id').references('heros.hero_id')
			table.foreign('weapon_id').references('weapons.weapon_id')
		})
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('hero_weapons')
};
