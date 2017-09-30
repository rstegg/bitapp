module.exports = function(sequelize, DataTypes) {
  const Withdrawal = sequelize.define('withdrawal', {
    amount: DataTypes.DECIMAL,
    bank: DataTypes.JSONB,
  })

  Withdrawal.associate = ({ User }) => {
    Withdrawal.belongsTo(User)
  }

  return Withdrawal
}
