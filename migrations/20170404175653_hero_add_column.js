exports.up = function(knex, Promise) {
  return knex.schema
  	.table('heros', function(table) {
  		table.string('hero_guild')
  	})
};

exports.down = function(knex, Promise) {
	return knex.schema
		.table('heros', function(table) {
			table.dropColumn('hero_guild')
		})
};
