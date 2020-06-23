exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ponentes', function(t) {
            t.bigIncrements('id').primary();
            t.string('nombres').notNullable();
            t.string('apellidos').notNullable();
            t.string('email').notNullable().unique();
            t.string('categoria').notNullable();
            t.string('tema').notNullable();
            t.string('resumen').notNullable();
            t.string('institucion').notNullable();
            t.string('fecha');
            t.string('hora');
        })
    ]);

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ponentes'),
    ]);

};