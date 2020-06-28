exports.up = function (knex) {
  return knex.schema.createTable("users", function (t) {
    t.bigIncrements("id").primary();
    t.string("user");
    t.string("password");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
