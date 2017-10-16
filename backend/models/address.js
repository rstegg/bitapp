module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    address: DataTypes.STRING,
    derivation: DataTypes.INTEGER,
    accountId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Accounts',
        key: 'id'
      }
    },
  })

  Address.associate = ({ Account }) => {
    Address.belongsTo(Account)
  }

  return Address
}
