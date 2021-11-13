
exports.up = function(knex) {
   return knex.schema.createTable('users', (table) => {
       table.integer("id")
       table.string('titel') // up to 255 chars !
       table.string('name')
       table.string('lastName')
       table.integer('age')
       table.string('city')
       table.string('state')
       table.string('company')
       table.string('email')
       table.integer('phone')
   })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
