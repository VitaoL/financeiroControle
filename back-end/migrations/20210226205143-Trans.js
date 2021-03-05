'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transTable = queryInterface.createTable('Transferencias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      value: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: false,
        unique: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      wallet: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.STRING,
      },
    });

    return transTable;
  },

  down: async (queryInterface) => queryInterface.dropTable('Transferencias'),
};
