exports.up = function (knex) {
  return knex.schema.createTable("ponencias", function (t) {
    t.bigIncrements("id").primary();
    t.string("tema").notNullable();
    t.integer("idPonente").references("id").inTable("ponentes");
    t.integer("idCongreso").references("id").inTable("congreso");
    t.integer("idAsistente").references("id").inTable("asistentes");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ponencias");
};
