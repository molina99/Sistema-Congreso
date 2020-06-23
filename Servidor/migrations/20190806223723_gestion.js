exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('gestion', function(t) {
            t.bigIncrements('id');
            t.text('tituloCongreso').notNullable();
            t.text('direccionCorreo').notNullable();
            t.text('paginaWeb').notNullable().unique();
            t.text('informacion').notNullable();
            t.text('tituloCronograma').notNullable();
            t.text('telefono').notNullable();
            t.text('correoUno').notNullable();
            t.text('correoDos').notNullable();
        })
    ]);

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('gestion'),
    ]);

};