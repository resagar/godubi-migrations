'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tasks.init({
    id: DataTypes.BIGINT,
    description: DataTypes.STRING,
    board_id: DataTypes.BIGINT,
    user_id: DataTypes.BIGINT,
    worker_id: DataTypes.BIGINT,
    due_date: DataTypes.DATE,
    tag: DataTypes.STRING,
    highlight: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};