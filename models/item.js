const ItemAttributes = ['name', 'description', 'image']

module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  Item.associate = (models) => {
    Item.belongsTo(models.User)
    Item.hasMany(models.Product)
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
