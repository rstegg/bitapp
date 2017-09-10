'use strict'

module.exports = function(sequelize, DataTypes) {
  const Withdrawal = sequelize.define('withdrawal', {
    amount: DataTypes.DECIMAL,
    bank: DataTypes.JSONB,
  })

  Withdrawal.associate = ({ user }) => {
    Withdrawal.belongsTo(user)
  }

  return Withdrawal
}
