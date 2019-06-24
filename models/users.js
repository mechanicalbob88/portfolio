/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    users_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_update: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  },
    {
      tableName: 'users'
    });
};
