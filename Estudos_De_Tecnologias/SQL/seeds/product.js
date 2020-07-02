
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          title:'primeiro produto',
          description:'blalblab',
          value:'200',
          queijo_id:'abc'
          
        },
        {
          title:'segundo produto',
          description:'blalblab',
          value:'20',
          queijo_id:'efg'
        }
      ]);
    });
};
