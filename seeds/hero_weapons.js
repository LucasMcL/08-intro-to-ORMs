exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hero_weapons').del()
    .then(function () {
      // Inserts seed entries
      return knex('hero_weapons').insert([
        {hero_id: 1, weapon_id: 1},
        {hero_id: 1, weapon_id: 2},
        {hero_id: 1, weapon_id: 3},
        {hero_id: 2, weapon_id: 2},
        {hero_id: 2, weapon_id: 3},
        {hero_id: 3, weapon_id: 1}
      ]);
    });
};
