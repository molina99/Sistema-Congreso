exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("congreso.inscripcion")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("congreso.inscripcion").insert([
        {
          idAsistente: 1,
          idPonente: 1,
          idCongreso: 1,
        },
      ]);
    });
};
