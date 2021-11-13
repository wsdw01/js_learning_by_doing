
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {quote: 'A Martini. Shaken, not stirred', user_id: 1},
        {quote: 'Bond, James Bond', user_id: 1},
        {quote: 'Well, I like to do some things the old-fashioned way', user_id: 1},
        {quote: 'Do or do not. There is no try.', user_id: 2},
        {quote: 'You must unlearn what you have learned.', user_id: 2},
      ]);
    });
};
