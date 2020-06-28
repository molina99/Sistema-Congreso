exports.up = function (knex) {
  return knex.schema.createTable("congreso", function (t) {
    t.bigIncrements("id").primary();
    t.string("nombre");
    t.string("direccion");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("congreso");
};
