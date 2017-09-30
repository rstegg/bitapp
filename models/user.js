const bcrypt = require('bcrypt')

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    phone: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    registered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    verifyCode: DataTypes.STRING,
    name: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
    banks: DataTypes.ARRAY(DataTypes.JSONB),
    image: DataTypes.STRING,
  })

  User.associate = ({ Item, Product }) => {
    User.hasMany(Item)
    User.hasMany(Product)
  }

  User.prototype.validPassword = function(password) {
    return bcrypt.compare(password, this.password)
  }

  return User
}
