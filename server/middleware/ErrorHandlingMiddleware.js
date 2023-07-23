const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    //return - чтобы функция завершилась
    return res.status(err.status).json({
      message: err.message,
    });
  }
  //если не instanceof
  return res.status(500).json({ message: 'Непредвиденная ошибка!' });
};
