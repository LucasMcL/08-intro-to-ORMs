
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weapons').del()
    .then(function () {
      // Inserts seed entries
      return knex('weapons').insert([
        {weapon_name: 'sword'},
        {weapon_name: 'axe'},
        {weapon_name: 'pool noodle'}
      ]);
    });
};
