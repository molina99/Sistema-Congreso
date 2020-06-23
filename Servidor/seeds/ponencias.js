
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gyba.ponencias').del()
    .then(function () {
      // Inserts seed entries
      return knex('gyba.ponencias').insert([
        {
          tema: 'Debate',
          idPonente: 1,
          idCongreso: 1,
          idAsistente: 1
        }
      ]);
    });
};
