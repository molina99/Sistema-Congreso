
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gyba.inscripcion').del()
    .then(function () {
      // Inserts seed entries
      return knex('gyba.inscripcion').insert([
        {
          idAsistente: 1,
          idPonente: 1,
          idCongreso: 1
        }
      ]);
    });
};
