
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heros').del()
    .then(function () {
      // Inserts seed entries
      return knex('heros').insert([
        {hero_name: 'Jon Snow'},
        {hero_name: 'Galadriel'},
        {hero_name: 'Gyro'}
      ]);
    });
};
