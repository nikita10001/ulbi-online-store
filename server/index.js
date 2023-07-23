require('dotenv').config(); //чтобы сервер мог считать env файл
const express = require('express');
const models = require('./models/models');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/index');
const fileUpload = require('express-fileupload');
const errorHander = require('./middleware/ErrorHandlingMiddleware');

const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors()); //чтобы отправлять запросы
app.use(express.json()); //чтобы парсило в json формат
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

//Обработка ошибок, последний Middleware
app.use(errorHander);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); //сверяет состояние базы данных со схемой данных
    app.listen(PORT, () => console.log('Server started on port ' + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
