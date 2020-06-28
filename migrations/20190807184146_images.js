exports.up = function (knex) {
  return knex.schema.createTable("images", function (t) {
    t.increments("id");
    t.text("nombre");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("images");
};
