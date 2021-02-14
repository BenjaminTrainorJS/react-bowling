exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('scoreCard').del()
    .then(function () {
      // Inserts seed entries
      return knex('scoreCard').insert([
        { id: 1, player_id: 1, score: 144 },
        { id: 2, player_id: 2, score: 168 },
        { id: 3, player_id: 1, score: 220 }
      ])
    })
}
