
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hobbits').del()
    .then(function () {
      // Inserts seed entries
      return knex('hobbits').insert([
        {name: 'lola'},
        {name: 'karen'},
        {name: 'peter'}
      ]);
    });
};
