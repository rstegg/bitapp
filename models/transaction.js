module.exports = function(sequelize, DataTypes) {
  const Transaction = sequelize.define('transaction', {
    url: DataTypes.STRING,
    currency: DataTypes.STRING,
    amountUSD: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    txid: DataTypes.STRING,
    amount: DataTypes.DECIMAL
  })

  Transaction.associate = ({ User, Order }) => {
    Transaction.belongsTo(User)
    Transaction.belongsTo(Order)
  }

  return Transaction
}
