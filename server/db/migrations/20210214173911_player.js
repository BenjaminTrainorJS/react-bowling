exports.up = function (knex) {
  return knex.schema.createTable('player', table => {
    table.increments('id').primary()
    table.string('playerName')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('player')
}
