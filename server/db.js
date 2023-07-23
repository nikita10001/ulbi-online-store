const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME, //название БД
  process.env.DB_USER, //пользователь
  process.env.DB_PASSWORD, //ПАРОЛЬ
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

// module.exports = new Sequelize(
//   'online_store', //название БД
//   'postgres', //пользователь
//   `1`, //ПАРОЛЬ
//   {
//     dialect: 'postgres',
//     host: 'localhost',
//     port: '5432',
//   }
// );
