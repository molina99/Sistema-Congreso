exports.up = function (knex) {
  return knex.schema.createTable("asistentes", function (t) {
    t.bigIncrements("id").primary();
    t.string("nombres").notNullable();
    t.string("apellidos").notNullable();
    t.string("email").notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("asistentes");
};
