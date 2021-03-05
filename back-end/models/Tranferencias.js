const createTransferencias = (sequelize, DataTypes) => {
  const Transferencias = sequelize.define(
    'Transferencias',
    {
      userId: DataTypes.INTEGER,
      value: DataTypes.INTEGER,
      description: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      wallet: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  Transferencias.associate = (models) => {
    Transferencias.belongsTo(models.User, {
      as: 'user',
      foreign_key: 'userId',
    });
  };

  return Transferencias;
};

module.exports = createTransferencias;
