exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {hero_id: 1, monster_id: 2},
        {hero_id: 2, monster_id: 3},
        {hero_id: 3, monster_id: 1},
      ]);
    });
};
