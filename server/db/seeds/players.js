exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('player').del()
    .then(function () {
      // Inserts seed entries
      return knex('player').insert([
        { id: 1, playerName: 'Bob' },
        { id: 2, playerName: 'Alice' },
        { id: 3, playerName: 'Fluffy' }
      ])
    })
}
