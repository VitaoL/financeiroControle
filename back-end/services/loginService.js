const { Users } = require('../models');

const userLogin = async (emailParams, _nameParams, passwordParams) => {
  const user = await Users.findOne({ where: { email: emailParams } });
  if (!user) throw new Error('User not found');

  const { email, name, password, id } = user.dataValues;
  if (passwordParams === password) {
    const userData = { email, name, id };
    return userData;
  }
  throw new Error("Wrong Password");
};

module.exports = { userLogin };
