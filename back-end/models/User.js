const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  // User.associate = (models) => {
  //   User.hasMany(models.Trasnferencias, { as: 'transferencias', foreignKey: 'userId' })
  // }
  return User;
};

module.exports = User;
