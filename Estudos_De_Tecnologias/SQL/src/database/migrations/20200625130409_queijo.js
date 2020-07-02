
exports.up = function(knex) {
  return knex.schema.createTable("queijo",table=>{
      table.string('id').notNullable().primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('queijo')
};
