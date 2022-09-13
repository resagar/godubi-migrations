'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
        default: 'pending'
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      board_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED,
        references:{
          model:{
            tableName: "boards"
          },
          key: 'id'
        }
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED,
        references:{
          model:{
            tableName: "users"
          },
          key: 'id'
        }
      },
      worker_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED,
        references:{
          model:{
            tableName: "workers"
          },
          key: 'id'
        }
      },
      due_date: {
        type: Sequelize.DATE
      },
      tag: {
        type: Sequelize.STRING
      },
      highlight: {
        type: Sequelize.BOOLEAN,
        default: 0
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};