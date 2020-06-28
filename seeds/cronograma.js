exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("congreso.cronograma")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("congreso.cronograma").insert([
        {
          temaPonencia: "Debate",
          fecha: "12-07-2009",
          hora: "15:30:00",
          autor: "Pepito",
          idCongreso: 1,
        },
      ]);
    });
};
