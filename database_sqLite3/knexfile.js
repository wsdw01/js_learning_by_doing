// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: null,
    connection: {
        filename: './database/dev.sqlite3'
    },
    migrations: {
        directory: 'database/migrations'
    },
    seeds: {
        directory: 'database/seeds'
    }
  }
};
