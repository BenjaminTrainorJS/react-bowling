exports.up = function (knex) {
  return knex.schema.createTable('scoreCard', table => {
    table.increments('id')
    table.integer('player_id')
    table.integer('score')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('scoreCard')
}
