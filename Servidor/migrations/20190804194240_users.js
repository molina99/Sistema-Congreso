exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function (t) {
            t.bigIncrements('id').primary();
            t.string('user');
            t.string('password');
        })

    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ]);

};