// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filname: './data/cars.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

};
