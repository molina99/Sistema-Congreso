exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("congreso.ponencias")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("congreso.ponencias").insert([
        {
          tema: "Debate",
          idPonente: 1,
          idCongreso: 1,
          idAsistente: 1,
        },
      ]);
    });
};
