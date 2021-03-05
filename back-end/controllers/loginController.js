const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } })
    .then((user) => {
      if (user === null) {
        return res.status(404).send({ message: 'Usuário não encontrado' });
      }
      const {
        email:emailUser,
        name:nameUser,
        password:passwordUser,
        id,
      } = user.dataValues;
      if (passwordUser === password) {
        const userData = { emailUser, nameUser, id };
        return res.status(200).json(userData);
      }
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

module.exports = router;
