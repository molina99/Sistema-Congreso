exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('asistentes', function(t) {
            t.bigIncrements('id').primary();
            t.string('nombres').notNullable();
            t.string('apellidos').notNullable();
            t.string('email').notNullable().unique();
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('asistentes')
    ]);
};