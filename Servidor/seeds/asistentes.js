
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gyba.asistentes').del()
    .then(function () {
      // Inserts seed entries
      return knex('gyba.asistentes').insert([
        {
          numIdentificacion: '1723538581',
          nombres: 'Jose Luis',
          apellidos: 'Molina Cañar',
          email: 'jose@gmail.com'
        }
      ]);
    });
};
