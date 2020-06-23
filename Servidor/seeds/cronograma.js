
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gyba.cronograma').del()
    .then(function () {
      // Inserts seed entries
      return knex('gyba.cronograma').insert([
        {
          temaPonencia: 'Debate',
          fecha: '12-07-2009',
          hora: '15:30:00',
          autor: 'Pepito',
          idCongreso: 1
        }
      ]);
    });
};
