exports.up = function (knex) {
  return knex.schema.createTable("inscripcion", function (t) {
    t.bigIncrements("id").primary();
    t.integer("idAsistente").references("id").inTable("asistentes");
    t.integer("idPonente").references("id").inTable("ponentes");
    t.integer("idCongreso").references("id").inTable("congreso");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("inscripcion");
};
