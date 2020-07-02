
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('queijo').del()
    .then(function () {
      // Inserts seed entries
      return knex('queijo').insert([
          {
            id:'abc',
            name:'joao',
            email:'joao@micro'
          },
          {
            id:'efg',
            name:'zezinho',
            email:'zezinho@micro'
          }
      ]);
    });
};
