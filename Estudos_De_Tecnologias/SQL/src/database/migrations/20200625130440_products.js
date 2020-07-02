
exports.up = function(knex) {
    return knex.schema.createTable('products',function(table){
        table.increments()
  
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.string('value').notNullable()
        
        
        table.string('queijo_id').references('queijo.id').notNullable().onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
