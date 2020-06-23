exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('congreso', function(t) {
            t.bigIncrements('id').primary();
            t.string('nombre');
            t.string('direccion');
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('congreso')
    ]);

};