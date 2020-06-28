exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("congreso.congreso")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("congreso.congreso").insert([
        {
          nombre: "Yavirac",
          direccion: "Garcia Moreno",
        },
      ]);
    });
};
