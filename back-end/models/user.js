const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return User;
};

module.exports = User;
