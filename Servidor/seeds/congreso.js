
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gyba.congreso').del()
    .then(function () {
      // Inserts seed entries
      return knex('gyba.congreso').insert([
        {
          nombre: 'Yavirac',
          direccion: 'Garcia Moreno'
        }
      ]);
    });
};
