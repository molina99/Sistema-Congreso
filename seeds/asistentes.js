exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("congreso.asistentes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("congreso.asistentes").insert([
        {
          numIdentificacion: "1723538581",
          nombres: "Jose Luis",
          apellidos: "Molina Cañar",
          email: "jose@gmail.com",
        },
      ]);
    });
};
