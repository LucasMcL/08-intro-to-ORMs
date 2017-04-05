exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('battles', function(table){
      table.increments('battle_id').primary();
      table.integer('hero_id').notNullable();
      table.integer('monster_id').notNullable();

      table.foreign('hero_id').references('heros.hero_id');
      table.foreign('monster_id').references('monsters.monster_id');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('battles')
};
