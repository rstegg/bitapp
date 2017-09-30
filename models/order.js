module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define('order', {
    totalUSD: DataTypes.DECIMAL,
    products: DataTypes.ARRAY(DataTypes.JSONB)
  })

  Order.associate = ({ User }) => {
    Order.belongsTo(User)
  }

  return Order
}
