exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {monster_name: 'Wolf'},
        {monster_name: 'Sully'},
        {monster_name: 'Spider'}
      ]);
    });
};
