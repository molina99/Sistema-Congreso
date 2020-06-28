exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("congreso.ponentes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("congreso.ponentes").insert([
        {
          id: 1,
          numIdentificacion: "1723538581",
          nombres: "Jose Luis",
          apellidos: "Molina Cañar",
          telefono: "0958758883",
          email: "jose@gmail.com",
        },
      ]);
    });
};
