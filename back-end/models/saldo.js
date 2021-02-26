module.exports = (sequelize, DataTypes) => {
  const saldo = sequelize.define(
    'carteira',
    {
      value: DataTypes.INTEGER,
      investment: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      data: DataTypes.DATE,
    },
    { timestamps: false },
  );
  
    sales.belongsTo(models.Users, {
      foreignKey: 'useId',
      as: 'User',
    });
  };

  return saldo;