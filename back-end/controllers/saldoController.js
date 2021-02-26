const saldoService = require('../services/loginService');
const rescue = require('express-rescue');

const userLogin = rescue(async (req, res) => {
  const { description, value, investment, userId } = req.body;
  const login = await saldoService.userLogin(description, value, investment, userId);
  res.status(200).json(login);
});

module.exports = { userLogin };
