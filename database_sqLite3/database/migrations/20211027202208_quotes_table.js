
exports.up = function(knex) {
    return knex.schema.createTable('quotes', (table) => {
        table.increments('id').primary();
        table.text('quote') // more than 255 chars
        
        table.integer('user_id').unsigned().notNullable()
        table.foreign('user_id').references('id').inTable('users')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('quotes')
};
