'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Victor Lustosa',
          email: 'victor_lustosacp10@hotmail.com',
          password: "123456",
        },
        {
          name: 'test',
          email: 'test@test.com',
          password: 'test',
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
