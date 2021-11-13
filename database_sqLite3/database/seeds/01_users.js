const faker = require("faker");
const recordMaker = require("../../src/recordMaker")

exports.seed = async function(knex) {

    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    await knex('users').insert(recordMaker(500));
    
};

/* exports.seed = function(knex) {
  
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(recordMaker(500));
    }).then(function () {
      // Inserts seed entries
      return knex('users').insert(recordMaker(500));
    }).then(function () {
      // Inserts seed entries
      return knex('users').insert(recordMaker(500));
    }).then(function () {
      // Inserts seed entries
      return knex('users').insert(recordMaker(500));
    }).then(function () {
      // Inserts seed entries
      return knex('users').insert(recordMaker(500));
    });
    
    
};
 */
