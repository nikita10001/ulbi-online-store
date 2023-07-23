const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
  //запрос на создание типа
  async create(req, res) {
    const { name } = req.body; //из тела запроса
    const type = await Type.create({ name }); // создали тип в бд
    return res.json(type); //вернули ответ
  }

  //получение типов
  async getAll(req, res) {
    //вернём все существующие записи которые есть в бд
    const types = await Type.findAll();
    return res.json(types);
  }
}

//экспортируем объект этого класса
module.exports = new TypeController();
