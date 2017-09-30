const ItemAttributes = [ 'id', 'name', 'description', 'image' ]

module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define('item', {
    name: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  Item.associate = ({ User, Product }) => {
    Item.belongsTo(User)
    Item.hasMany(Product)
  }

  Item.getItemsByUser = user =>
    Item.findAll({
      where: { userId: user.id },
      attributes: ItemAttributes
    })
      .then(items =>
        !items ? Promise.reject('No items')
          : items
      )

  return Item
}
