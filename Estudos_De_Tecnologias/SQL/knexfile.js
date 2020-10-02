// Update with your config settings.

require('dotenv').config
const pass = process.env.POST_PASS

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host:'localhost',      
      user:'postgres',
      password:`${pass}`,
      database:'teste'
    },
    migrations:{
      directory:"./src/database/migrations"
    },
    seed:{
      directory:'./src/database'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
