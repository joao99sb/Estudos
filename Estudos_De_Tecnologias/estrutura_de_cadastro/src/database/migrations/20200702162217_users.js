
exports.up = function(knex) {
  return knex.schema.createTable("users",table=>{     
    table.string('id').primary()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('passwordResetToken')
    table.date('passwordResetExpires')
    table.unique('email')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
