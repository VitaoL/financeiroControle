const loginService = require('../services/loginService');
const rescue = require('express-rescue');

const userLogin = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const login = await loginService.userLogin(email, name, password);
  res.status(200).json(login);
});

module.exports = { userLogin };
