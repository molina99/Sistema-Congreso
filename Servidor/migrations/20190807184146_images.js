exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('images', function(t) {
            t.increments('id');
            t.text('nombre');
        })
    ]);

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('images'),
    ]);

};