module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    phone: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    registered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    verifyCode: DataTypes.STRING
    }
  })

  User.associate = (models) => {
    User.hasMany(models.Item)
    User.hasMany(models.Product)
  }

  return User
}
