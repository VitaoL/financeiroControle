const { Router } = require('express');
const { Transferencias } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const { id } = req.query;

  const allTransfer = await Transferencias.findAll({
    where: { userId: id },
  });
  const totalSaldo = await Transferencias.sum('value', {
    where: { userId: id, wallet: 'bill' },
  });
  res.status(200).json({allTransfer, totalSaldo});
});

// // eager loading
// router.get('/:id', async (req, res) => {
//   const product = await Product.findByPk(req.params.id, {
//     include: { model: User, as: 'user' },
//   });

//   res.status(200).json(product);
// });

// lazy loading
// router.get('/:id', async (req, res) => {
//   const product = await Product.findByPk(req.params.id)

//   const user = await product.getUser();

//   const { dataValues } = user;

//   res.status(200).json({ ...dataValues, user });
// });

router.post('/', (req, res) => {
  const { description, value, wallet, userId } = req.body;
  Transferencias.create({
    description,
    value,
    userId,
    wallet,
  })
    .then((tranferencia) => {
      if (tranferencia === null) {
        res.status(404).send({ message: 'Erro tente novamente' });
      }
      return res.status(200).send({ message: 'sucesso' });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

// router.delete('/:id', async (req, res) => {
//   await Product.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });

//   res.status(200).json({ message: 'Produto excluído com sucesso' });
// });

// router.put('/:id', async (req, res) => {
//   const { name, description, price } = req.body;
//   await Product.update(
//     { name, description, price },
//     {
//       where: { id: req.params.id },
//     }
//   );

//   res.status(200).json({ message: 'Produto atualizado com sucesso' });
// });

module.exports = router;
