exports.up = function (knex) {
  return knex.schema.createTable("cronograma", function (t) {
    t.bigIncrements("id").primary();
    t.string("temaPonencia").notNullable();
    t.date("fecha").notNullable();
    t.time("hora").notNullable();
    t.string("autor").notNullable();
    t.integer("idCongreso").references("id").inTable("congreso");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cronograma");
};
